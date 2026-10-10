import { useEffect, useState } from 'react';
import { AudioLines } from 'lucide-react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setExiting(true), 1500);
    const hideTimer = window.setTimeout(() => setVisible(false), 2150);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`loading-screen ${exiting ? 'loading-screen-exit' : ''}`} aria-label="LA SOUND lädt">
      <div className="loading-orbit loading-orbit-one" />
      <div className="loading-orbit loading-orbit-two" />
      <div className="loading-content">
        <div className="loading-mark">
          <span>L</span>
        </div>
        <div className="loading-brand">LA SOUND</div>
        <div className="loading-subtitle">EVENT PRODUCTION</div>
        <div className="loading-line">
          <span />
        </div>
        <div className="loading-status">
          <AudioLines className="h-4 w-4" strokeWidth={1.5} />
          Showtime wird vorbereitet
        </div>
      </div>
    </div>
  );
}
