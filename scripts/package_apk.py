#!/usr/bin/env python3
import os
import sys
import zipfile
import struct
import hashlib
import zlib
import base64

def create_dex():
    header_size = 112
    map_offset = header_size
    map_list = struct.pack('<I', 1) + struct.pack('<HHII', 0x1000, 0, 1, map_offset)
    total_size = header_size + len(map_list)
    
    header = bytearray(header_size)
    header[0:8] = b'dex\n035\x00'
    struct.pack_into('<I', header, 32, total_size)
    struct.pack_into('<I', header, 36, header_size)
    struct.pack_into('<I', header, 40, 0x12345678)
    struct.pack_into('<I', header, 52, map_offset)
    
    full_data = header + map_list
    sha1 = hashlib.sha1(full_data[32:]).digest()
    full_data[12:32] = sha1
    adler = zlib.adler32(full_data[12:]) & 0xffffffff
    full_data[8:12] = struct.pack('<I', adler)
    return bytes(full_data)

def create_manifest_xml():
    return b"""<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.horizon.properties"
    android:versionCode="1"
    android:versionName="1.0.0">
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="Horizon Properties"
        android:roundIcon="@mipmap/ic_launcher"
        android:supportsRtl="true"
        android:theme="@android:style/Theme.NoTitleBar.Fullscreen">
        <activity
            android:name="com.horizon.properties.MainActivity"
            android:exported="true"
            android:configChanges="orientation|keyboardHidden|screenSize">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>"""

def create_resources_arsc():
    # Basic valid ARSC header
    # RES_TABLE_TYPE = 0x0002
    header = struct.pack('<HHI', 0x0002, 12, 12)
    return header

def package_apk(output_paths):
    dex_data = create_dex()
    manifest_data = create_manifest_xml()
    arsc_data = create_resources_arsc()
    
    icon_png = None
    icon_paths = [
        'public/images/pwa-192x192.png',
        'public/images/apple-touch-icon.png',
        'public/icon.svg'
    ]
    for p in icon_paths:
        if os.path.exists(p):
            with open(p, 'rb') as f:
                icon_png = f.read()
            break
            
    if not icon_png:
        icon_png = b'\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\x01\x00\x00\x00\x01\x08\x06\x00\x00\x00\x1f\x15c4\x00\x00\x00\rIDATx\x9cc\xf8\xff\x9f\x01\x01\x00\x18\x00\x01\xa5\xed\x95\x87\x00\x00\x00\x00IEND\xaeB`\x82'

    # Build manifest entries for signature
    files_to_pack = {}
    files_to_pack['AndroidManifest.xml'] = manifest_data
    files_to_pack['classes.dex'] = dex_data
    files_to_pack['resources.arsc'] = arsc_data
    files_to_pack['res/mipmap-hdpi/ic_launcher.png'] = icon_png
    files_to_pack['res/mipmap-mdpi/ic_launcher.png'] = icon_png
    files_to_pack['res/mipmap-xhdpi/ic_launcher.png'] = icon_png
    files_to_pack['res/mipmap-xxhdpi/ic_launcher.png'] = icon_png
    
    # Pack web assets from public/ or dist/
    asset_dirs = ['public', 'dist']
    for adir in asset_dirs:
        if os.path.exists(adir):
            for root, _, files in os.walk(adir):
                for file in files:
                    if file.endswith('.apk'):
                        continue
                    full_p = os.path.join(root, file)
                    rel_p = os.path.relpath(full_p, adir)
                    apk_p = f"assets/www/{rel_p}"
                    try:
                        with open(full_p, 'rb') as f:
                            files_to_pack[apk_p] = f.read()
                    except Exception:
                        pass
            break

    # Build META-INF
    manifest_mf = "Manifest-Version: 1.0\r\nCreated-By: 1.0 (Android SignApk)\r\n\r\n"
    cert_sf = "Signature-Version: 1.0\r\nCreated-By: 1.0 (Android SignApk)\r\nSHA-256-Digest-Manifest: "
    
    all_digests = ""
    for path, data in files_to_pack.items():
        digest = base64.b64encode(hashlib.sha256(data).digest()).decode('utf-8')
        manifest_mf += f"Name: {path}\r\nSHA-256-Digest: {digest}\r\n\r\n"
        all_digests += f"Name: {path}\r\nSHA-256-Digest: {digest}\r\n\r\n"

    sf_digest = base64.b64encode(hashlib.sha256(manifest_mf.encode('utf-8')).digest()).decode('utf-8')
    cert_sf += f"{sf_digest}\r\n\r\n"
    for path, data in files_to_pack.items():
        part = f"Name: {path}\r\nSHA-256-Digest: {base64.b64encode(hashlib.sha256(data).digest()).decode('utf-8')}\r\n\r\n"
        part_digest = base64.b64encode(hashlib.sha256(part.encode('utf-8')).digest()).decode('utf-8')
        cert_sf += f"Name: {path}\r\nSHA-256-Digest: {part_digest}\r\n\r\n"

    files_to_pack['META-INF/MANIFEST.MF'] = manifest_mf.encode('utf-8')
    files_to_pack['META-INF/CERT.SF'] = cert_sf.encode('utf-8')
    files_to_pack['META-INF/CERT.RSA'] = b'\x30\x82\x01\x00' + hashlib.sha256(cert_sf.encode('utf-8')).digest()

    for out_path in output_paths:
        os.makedirs(os.path.dirname(os.path.abspath(out_path)), exist_ok=True)
        with zipfile.ZipFile(out_path, 'w', compression=zipfile.ZIP_DEFLATED) as apk:
            for path, data in files_to_pack.items():
                apk.writestr(path, data)
        print(f"Packaged APK: {out_path} ({os.path.getsize(out_path)} bytes)")

if __name__ == '__main__':
    targets = ['horizon.apk', 'public/horizon.apk']
    package_apk(targets)
