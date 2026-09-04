// Technologies strip — pure black bg, soft grey marquee text
const techs = ['React', 'Vue', 'Next.js', 'PostgreSQL'];

// Duplicate enough times to fill the widest viewport seamlessly
const repeated = [...techs, ...techs, ...techs, ...techs];

export const TechStrip = () => (
    <div
        aria-hidden="true"
        style={{
            overflow:    'hidden',
            position:    'relative',
            paddingTop:  '1.75rem',
            paddingBottom: '1.75rem',
        }}
    >
        {/* Left fade */}
        <div
            style={{
                position:   'absolute',
                left:       0,
                top:        0,
                bottom:     0,
                width:      '8rem',
                background: 'linear-gradient(to right, rgba(0,0,0,0.55), transparent)',
                zIndex:     10,
                pointerEvents: 'none',
            }}
        />
        {/* Right fade */}
        <div
            style={{
                position:   'absolute',
                right:      0,
                top:        0,
                bottom:     0,
                width:      '8rem',
                background: 'linear-gradient(to left, rgba(0,0,0,0.55), transparent)',
                zIndex:     10,
                pointerEvents: 'none',
            }}
        />

        {/* Scrolling track — duplicated 4× so loop is seamless at any width */}
        <div
            className="flex whitespace-nowrap animate-marquee"
            style={{ willChange: 'transform' }}
        >
            {repeated.map((tech, idx) => (
                <span
                    key={idx}
                    className="flex-shrink-0 flex items-center"
                >
                    <span
                        style={{
                            color:          'rgba(200,208,216,0.42)',
                            fontSize:       '1rem',
                            fontWeight:     500,
                            letterSpacing:  '0.18em',
                            textTransform:  'uppercase',
                            fontFamily:     'Inter, sans-serif',
                            padding:        '0 2.5rem',
                        }}
                    >
                        {tech}
                    </span>
                    {/* Low-visibility dot separator */}
                    <span
                        style={{
                            display:         'inline-block',
                            width:           '3px',
                            height:          '3px',
                            borderRadius:    '50%',
                            background:      'rgba(200,208,216,0.22)',
                            flexShrink:      0,
                        }}
                    />
                </span>
            ))}
        </div>
    </div>
);
