import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
    {
        title: "Addis Theatre Shows",
        description:
            "Addis Theatre Shows is a theatre ticketing web app for Amharic-language performances. Users can browse upcoming shows with dates, venues, and pricing, view detailed show pages, select seats on an interactive seat map, and complete a real payment checkout through an integrated AddisPay flow. (Backend managed in a separate repository).",
        image: "/theatre.png",
        tags: ["React", "Tailwind CSS"],
        link: "https://theatre-frontend-kgkj.onrender.com/",
        github: "https://github.com/beth619/theatre-frontend.git",
    },
    {
        title: "TRMS",
        description:
            "Tigray Resilient Referral Management System — a clinical referral coordination platform built for the Tigray Regional Health Bureau. Features 24/7 referral coordination, unified patient transfer logs, and emergency escalation hotline integration.",
        image: "/projects/trms.png",
        tags: ["React", "Node.js", "PostgreSQL"],
        link: "http://trrms.vercel.app",
        github: "#",
    },
    {
        title: "SunFinity Firm",
        description:
            "SunFinity Firm is a content and publishing platform for founders and leaders, offering books, long-form essays, courses, and a tiered membership. It features a filterable book shop with direct and Amazon purchase options, a searchable resource library, personalized dashboards, and an editorial content hub — designed with accessibility, dark/light theming, and MENA/RTL-conscious UX in mind.",
        image: "/image.png",
        tags: ["React"],
        link: "https://sunfinity-firm.vercel.app/",
        github: "https://github.com/beth619/sunfinity-firm.git",
    },
];

export const Projects = () => {
    const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal({ threshold: 0.1 });

    // One observer per card for independent stagger
    const { ref: card0Ref, isRevealed: card0Revealed } = useScrollReveal({ threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    const { ref: card1Ref, isRevealed: card1Revealed } = useScrollReveal({ threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    const { ref: card2Ref, isRevealed: card2Revealed } = useScrollReveal({ threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    const { ref: ctaRef, isRevealed: ctaRevealed } = useScrollReveal({ threshold: 0.1 });

    const cardReveal = [
        { ref: card0Ref, isRevealed: card0Revealed, delay: '0ms'   },
        { ref: card1Ref, isRevealed: card1Revealed, delay: '130ms' },
        { ref: card2Ref, isRevealed: card2Revealed, delay: '260ms' },
    ];

    return (
        <section id="projects" className="py-16 lg:py-24 relative overflow-hidden">

            {/* Ambient glows */}
            <div
                className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ opacity: 0.03, filter: 'blur(120px)', background: 'radial-gradient(circle, #20b2a6, transparent)' }}
            />
            <div
                className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
                style={{ opacity: 0.025, filter: 'blur(100px)', background: 'radial-gradient(circle, #f5a623, transparent)' }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                {/* ── Section heading ───────────────────────────────────── */}
                <div className="mb-16 max-w-3xl">
                    <h2
                        className={`reveal ${headerRevealed ? 'revealed' : ''} font-display font-extrabold leading-[0.92] tracking-tight text-foreground`}
                        style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)' }}
                    >
                        Projects that
                        <span
                            className="font-serif font-normal italic ml-3"
                            style={{ color: 'color-mix(in srgb, var(--color-foreground) 60%, transparent)' }}
                        >
                            I built.
                        </span>
                    </h2>
                    <p className={`reveal delay-200 ${headerRevealed ? 'revealed' : ''} text-muted-foreground font-light mt-5`}>
                        A selection of my recent work.
                    </p>
                </div>

                {/* ── Uniform 3-col grid — all cards equal ─────────────── */}
                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((project, idx) => {
                        const { ref, isRevealed, delay } = cardReveal[idx];
                        return (
                            <div
                                key={idx}
                                ref={ref}
                                className="group relative rounded-2xl overflow-hidden transition-all duration-500 flex flex-col"
                                style={{
                                    background:  '#141a1f',
                                    border:      '1px solid rgba(160,170,185,0.15)',
                                    opacity:     isRevealed ? 1 : 0,
                                    transform:   isRevealed ? 'translateY(0)' : 'translateY(36px)',
                                    transition:  isRevealed
                                        ? `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay},
                                           transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay},
                                           border-color 0.5s ease`
                                        : 'border-color 0.5s ease',
                                }}
                                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(40,55,68,0.95)'}
                                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(160,170,185,0.15)'}
                            >
                                {/* Project number watermark */}
                                <span
                                    className="absolute top-4 left-4 z-20 font-display font-extrabold text-white/10 leading-none select-none pointer-events-none text-5xl"
                                    aria-hidden="true"
                                >
                                    0{idx + 1}
                                </span>

                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                                    {/* Hover links overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 rounded-full glass hover:bg-[#1e2932] transition-all"
                                        >
                                            <ArrowUpRight className="w-4 h-4" />
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 rounded-full glass hover:bg-[#1e2932] transition-all"
                                        >
                                            <Github className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>

                                {/* Card content */}
                                <div className="p-5 flex flex-col flex-1 gap-3">
                                    <div className="flex items-start justify-between">
                                        <h3 className="font-display font-bold text-lg tracking-tight group-hover:text-white transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                                    </div>
                                    <p className="text-xs text-muted-foreground leading-relaxed font-light">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
                                        {project.tags.map((tag, tagIdx) => (
                                            <span
                                                key={tagIdx}
                                                className="px-2.5 py-1 rounded-full text-xs border border-border/50 text-muted-foreground hover:border-border hover:text-foreground transition-all duration-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ── View All CTA ──────────────────────────────────────── */}
                <div ref={ctaRef} className={`reveal delay-200 ${ctaRevealed ? 'revealed' : ''} text-center mt-16`}>
                    <AnimatedBorderButton>
                        View All Projects
                        <ArrowUpRight className="w-4 h-4" />
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
    );
};