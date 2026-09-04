import { useEffect, useRef, useState } from 'react';
import { TechStrip } from '@/components/TechStrip';

// ── Config ────────────────────────────────────────────────────────
const HERO_VIDEO_SRC = '/videos/hero.mp4.mp4';

export const Hero = () => {
    const [visible, setVisible]   = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const videoRef                = useRef(null);

    useEffect(() => {
        const mobileQuery = window.matchMedia('(max-width: 767px)');
        setIsMobile(mobileQuery.matches);
        // Small delay so video has a frame to paint before fading text in
        const t = setTimeout(() => setVisible(true), 200);
        return () => clearTimeout(t);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden"
            style={{ background: '#000000' }}
        >
            {/* ── Video / BG layer — full-screen, no clip-path ────────── */}
            <div
                aria-hidden="true"
                style={{
                    position:   'absolute',
                    inset:      0,
                    zIndex:     1,
                    opacity:    visible ? 1 : 0,
                    transition: 'opacity 0.8s ease',
                }}
            >
                {!isMobile ? (
                    <video
                        ref={videoRef}
                        src={HERO_VIDEO_SRC}
                        autoPlay muted loop playsInline
                        preload="metadata"
                        aria-hidden="true"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                ) : (
                    <img
                        src={HERO_VIDEO_POSTER}
                        alt=""
                        aria-hidden="true"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45 }}
                    />
                )}

                {/* Dark semi-transparent overlay */}
                <div
                    style={{
                        position:   'absolute',
                        inset:      0,
                        background: 'linear-gradient(135deg, rgba(4,10,14,0.82) 0%, rgba(4,10,14,0.55) 55%, rgba(4,10,14,0.78) 100%)',
                    }}
                />
            </div>

            {/* ── Lorem ipsum paragraph — sole text element ──────────── */}
            <div
                style={{
                    position:       'relative',
                    zIndex:         10,
                    minHeight:      '100vh',
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    paddingTop:     '9rem',
                    paddingBottom:  '1.5rem',
                }}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex justify-center">
                    <p
                        style={{
                            maxWidth:   '38rem',
                            fontSize:   'clamp(1rem, 1.2vw, 1.15rem)',
                            color:      '#ffffff',
                            lineHeight: '1.85',
                            fontWeight: 300,
                            textAlign:  'center',
                            marginTop:  '5rem',
                            opacity:    visible ? 1 : 0,
                            transform:  visible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s',
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat — crafting digital experiences
                        where precision meets creativity.
                    </p>
                </div>
            </div>

            {/* ── Bottom fade — blends video overlay into pure black ── */}
            <div
                aria-hidden="true"
                style={{
                    position:      'absolute',
                    bottom:        0,
                    left:          0,
                    right:         0,
                    height:        '180px',
                    background:    'linear-gradient(to bottom, transparent, #000000)',
                    zIndex:        8,
                    pointerEvents: 'none',
                }}
            />

            {/* ── Tech strip — pinned to bottom of hero viewport ─── */}
            <div
                style={{
                    position:   'absolute',
                    bottom:     0,
                    left:       0,
                    right:      0,
                    zIndex:     15,
                    opacity:    visible ? 1 : 0,
                    transition: 'opacity 0.8s ease 0.6s',
                }}
            >
                <TechStrip />
            </div>
        </section>
    );
};