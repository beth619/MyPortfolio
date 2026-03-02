import { Button } from '@/components/Button';

import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';
const skills = [
    "React",
    "Next.js",
    "Vue",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Figma",
];
export const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/hero-bg.jpg"
                    alt="hero image"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* Gradient Overlay */}

            {/* Green Dots - Fixed */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,

                        }}
                    />
                ))}
            </div>

            {/* content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Software Engineer
                            </span>
                        </div>
                        {/*headline */}
                        <div className="space-y-44">
                         
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-800 mt-28">
                                Hi I'm <span className="text-primary">Betelhem Mekonnen</span> -A Software Engineer specializing in
                                React,Next.js,Vue and TypeScript.I Build beautiful and functional digital experiences
                                through code and creativity.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300 mt-48">
                            <Button href="#contact" size="lg">
                                Contact Me <ArrowRight className="w-5 h-5" />
                            </Button>
                            <a href="/Betelhem-Mekonnen-CV.pdf" download="Betelhem-Mekonnen-CV.pdf" target="_blank" rel="noopener noreferrer" className="inline-block">
                            <AnimatedBorderButton>
                                <Download className="w-5 h-5" />
                                Download CV
                            </AnimatedBorderButton>
                            </a>
                        </div>
                    </div>

                    {/* Right Column - profile image */}
                    <div className="relative animate-fade-in animation-delay-300">
                        {/* profile image */}
                        <div className="relative max-w-sm mx-auto">
                            <div
                                className="absolute inset-0
                             rounded-full bg-gradient-to-br
                             from-primary/30 via-transparent 
                             to-primary/10 blur-2xl animate-pulse"
                            />

                            <div className="relative glass rounded-full p-2 glow-border">
                                <img
                                    src="/profile-photo.jpg"
                                    alt="Bethlehem"
                                    className="w-full aspect-square object-cover rounded-full" />

                            </div>
                        </div>
                    </div>
                </div>

                {/*skills */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">
                        Technologies I work with
                    </p>
                    <div className="relative overflow-hidden">
                        <div
                            className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
                        />
                        <div
                            className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
                        />
                        <div className="flex animate-marquee">
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className="flex-shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Button */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                <a
                    href="#about"
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
        </section>
    );
};