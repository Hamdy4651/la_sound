import { useRef, useState, useCallback, MouseEvent, TouchEvent } from 'react';
import { MoveHorizontal } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function BeforeAfter() {
  const { ref, visible } = useReveal();
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handleMouseDown = () => setDragging(true);
  const handleMouseUp = () => setDragging(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (dragging) updatePosition(e.clientX);
  };

  const handleClick = (e: MouseEvent) => {
    updatePosition(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-ink-700 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="section-label mb-4">Vorher / Nachher</p>
          <h2 className="display-heading text-3xl md:text-5xl lg:text-6xl text-cream">
            Eine leere Halle. Eine unvergessliche Show.
          </h2>
          <p className="mt-6 text-cream/40 max-w-2xl mx-auto">
            Ziehen Sie den Regler und erleben Sie, was aus einer gewöhnlichen
            Location wird, wenn LA SOUND die Bühne übernimmt.
          </p>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden gold-border transition-all duration-1000 select-none"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1)' : 'scale(0.95)',
          }}
        >
          <div
            ref={containerRef}
            className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] cursor-ew-resize"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onClick={handleClick}
            onTouchMove={handleTouchMove}
          >
            {/* After image (full) */}
            <img
              src="https://images.pexels.com/photos/2167382/pexels-photo-2167382.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Nach dem Aufbau"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute top-4 right-4 glass-card px-3 py-1.5 text-xs tracking-wider uppercase text-gold-300">
              Nachher
            </div>

            {/* Before image (clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${position}%` }}
            >
              <img
                src="https://images.pexels.com/photos/16985119/pexels-photo-16985119.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Vor dem Aufbau"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ width: containerRef.current?.offsetWidth ?? '100%', maxWidth: 'none' }}
                draggable={false}
              />
              <div className="absolute top-4 left-4 glass-card px-3 py-1.5 text-xs tracking-wider uppercase text-cream/60">
                Vorher
              </div>
            </div>

            {/* Handle */}
            <div
              className="ba-handle"
              style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
            >
              <div className="ba-handle-knob">
                <MoveHorizontal className="w-5 h-5 text-gold-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
