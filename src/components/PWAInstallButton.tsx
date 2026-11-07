import React, { useState } from 'react';
import { Smartphone, Download, Check, X, ExternalLink } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  variant?: 'nav' | 'banner' | 'floating';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ variant = 'nav' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);

  // If already installed in standalone mode, hide
  if (isInstalled) {
    return null;
  }

  const handleAction = async () => {
    if (isInstallable) {
      await install();
    } else {
      setShowGuide(true);
    }
  };

  return (
    <>
      {variant === 'nav' ? (
        <button
          type="button"
          onClick={handleAction}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#E2CCA6] border border-[#C5A880]/40 rounded-full hover:bg-[#C5A880]/15 transition-colors whitespace-nowrap bg-black/30 backdrop-blur-sm"
          title="Install Horizon App on Android or iOS"
          aria-label="Install App"
        >
          <Smartphone className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Install App</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={handleAction}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/20 transition-all shadow-sm"
        >
          <Smartphone className="w-4 h-4 text-[#E2CCA6]" />
          <span>Install Android App</span>
        </button>
      )}

      {/* Guided Install Modal for Android & APK generation */}
      {showGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#121824] border border-white/15 rounded-2xl max-w-md w-full p-6 text-white relative shadow-2xl">
            <button
              type="button"
              onClick={() => setShowGuide(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close install modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#C5A880]/20 border border-[#C5A880]/40 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-[#C5A880]" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium">Install Horizon Properties</h3>
                <p className="text-xs text-slate-400">Android &amp; iOS App Experience</p>
              </div>
            </div>

            <div className="space-y-4 text-xs text-slate-300">
              {/* Direct APK Download Card */}
              <div className="p-4 rounded-xl bg-[#0B0F17] border border-[#C5A880]/50 shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-[#E2CCA6] text-sm flex items-center gap-1.5">
                    <Download className="w-4 h-4 text-[#C5A880]" />
                    <span>Download horizon.apk</span>
                  </span>
                  <span className="text-[10px] text-slate-400 bg-white/10 px-2 py-0.5 rounded-full">
                    v1.0.0
                  </span>
                </div>
                <p className="leading-relaxed text-slate-300 mb-3">
                  Direct standalone Android package for side-loading or local testing.
                </p>
                <a
                  href="/horizon.apk"
                  download="horizon.apk"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#C5A880] hover:bg-[#D4B58C] text-[#0B0F17] font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download APK (7.8 MB)</span>
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="font-semibold text-white block mb-1">Direct Android Install (PWA)</span>
                <p className="leading-relaxed">
                  Open this website in <strong>Google Chrome on Android</strong>, tap the three dots menu (⋮) at the top-right, and select <strong>"Add to Home Screen"</strong> or <strong>"Install App"</strong>. It installs an app icon on your home screen and runs in full-screen standalone mode.
                </p>
              </div>

              {isIOS && (
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-semibold text-white block mb-1">For iPhone / iPad (Safari)</span>
                  <p className="leading-relaxed">
                    Tap the <strong>Share</strong> icon at the bottom of Safari, scroll down, and tap <strong>"Add to Home Screen"</strong>.
                  </p>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => setShowGuide(false)}
              className="mt-6 w-full py-2.5 bg-white/10 text-white font-medium text-xs uppercase tracking-wider rounded-xl hover:bg-white/20 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
