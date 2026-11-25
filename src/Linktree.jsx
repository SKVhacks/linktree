import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { DEFAULT_THEME, extractTheme, getCachedTheme } from "@/lib/colorTheme";

import { FaArrowUpFromBracket } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { LuCopyCheck } from "react-icons/lu";

import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import { WordRotate } from "@/components/ui/word-rotate";
import { AnimatedList } from "@/components/ui/animated-list";

import { profile } from "./data/Links";

import SocialMedia from "./pages/SocialMedia";
import QuickLinks from "./pages/QuickLinks";
import ProjectCards from "./pages/ProjectCards";
import FeaturedLink from "./pages/FeaturedLink";
import SupportLink from "./pages/SupportLink";

const Linktree = () => {
    const [copied, setCopied] = useState(false);
    const [showBadge, setShowBadge] = useState(false);
    const iconsRef = useRef([]);
    iconsRef.current = [];

    const addToRefs = (el) => {
        if (el && !iconsRef.current.includes(el)) {
            iconsRef.current.push(el);
        }
    };

    // Cached theme (from a previous visit) paints instantly, no color flash.
    const [theme, setTheme] = useState(
        () => getCachedTheme(profile.image, profile.color) || DEFAULT_THEME
    );

    const imgRef = useRef(null);

    const extractColors = () => {
        const img = imgRef.current;
        if (!img || !img.complete || !img.naturalWidth) return;
        try {
            setTheme(extractTheme(img, profile.color));
        } catch (err) {
            // Usually a CORS-tainted canvas: keep the default/cached theme.
            console.error("Color extraction failed:", err);
        }
    };

    // Keep the outer page + mobile browser chrome in sync with the theme.
    useEffect(() => {
        document.body.style.backgroundColor = theme.deep;
        let meta = document.querySelector('meta[name="theme-color"]');
        if (!meta) {
            meta = document.createElement("meta");
            meta.name = "theme-color";
            document.head.appendChild(meta);
        }
        meta.content = theme.edge;
    }, [theme]);

    useEffect(() => {
        const timer = setTimeout(() => setShowBadge(true), 1300);
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        // Image may already be loaded (from cache) before React attaches onLoad.
        extractColors();
    }, []);
    useEffect(() => {
        gsap.fromTo(
            iconsRef.current,
            {
                opacity: 0,
                y: 20,
                scale: 0.5,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.5,
                ease: "back.out(1.7)",
                stagger: 0.1,
            }
        );
    }, []);

    const copyUrl = async () => {
        try {
            await navigator.clipboard.writeText(profile.shareUrl);
            setCopied(true);

            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <div
            className="theme-root min-h-screen flex justify-center text-white font-sans"
            style={{
                "--theme-base": theme.base,
                "--theme-deep": theme.deep,
                "--theme-edge": theme.edge,
                "--theme-accent": theme.accent,
                "--theme-glow": theme.glow,
                "--theme-secondary": theme.secondary,
                "--theme-muted": theme.muted,
                background: "var(--theme-deep)",
            }}
        >
            <div className="theme-surface relative w-full max-w-lg min-h-screen overflow-hidden flex flex-col items-center isolate">
                {/* Copy Toast */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 z-50">
                    <AnimatedList delay={1000}>
                        {copied && (
                            <div className="backdrop-blur-3xl flex items-center gap-2 rounded-full bg-black/50 border border-white/10 px-4 py-2 text-sm font-medium text-white whitespace-nowrap shadow-lg">
                                <LuCopyCheck className="text-xl text-green-500" />
                                Link copied!
                            </div>
                        )}
                    </AnimatedList>
                </div>

                {/* Share Button */}
                <div className="absolute top-5 right-0 flex justify-between px-5 z-10">
                    <button
                        onClick={copyUrl}
                        className="w-[42px] h-[42px] rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center hover:brightness-125 transition"
                        style={{
                            background:
                                "color-mix(in oklab, var(--theme-base) 45%, transparent)",
                            boxShadow:
                                "0 4px 20px color-mix(in oklab, var(--theme-deep) 60%, transparent), inset 0 1px 0 rgba(255,255,255,0.25)",
                        }}
                    >
                        <FaArrowUpFromBracket />
                    </button>
                </div>

                <div className="w-full flex flex-col items-center text-center">
                    {/* Profile Image */}
                    <div className="relative w-full h-[420px] flex justify-center items-end">
                        <img
                            ref={imgRef}
                            src={profile.image}
                            alt={profile.name}
                            crossOrigin="anonymous"
                            onLoad={extractColors}
                            className="w-full h-full object-cover"
                            style={{
                                WebkitMaskImage:
                                    "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
                                maskImage:
                                    "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
                            }}
                        />
                    </div>

                    {/* Name */}
                    <div className="-mt-3 flex items-center justify-center gap-2 relative">
                        <h1 className="text-[42px] font-semibold tracking-tight drop-shadow-lg leading-none">
                            <DiaTextReveal
                                text={profile.name}
                                once
                                textColor="white"
                            />
                        </h1>

                        <MdVerified
                            className={`absolute -top-0.5 -right-5.5 text-[22px] text-blue-600 shrink-0 ${showBadge ? "opacity-100" : "opacity-0"
                                } transition-opacity duration-700`}
                        />
                    </div>

                    {/* Titles */}
                    <div
                        style={{ color: "var(--theme-muted)" }}
                        className={`text-lg font-normal ${showBadge ? "opacity-100" : "opacity-0"
                            } transition-opacity duration-100`}
                    >
                        <WordRotate
                            duration={1500}
                            words={profile.titles}
                        />
                    </div>

                    <SocialMedia addToRefs={addToRefs} />
                </div>

                {/* Cards */}
                <div className="w-full px-5 flex flex-col gap-4 mb-10">
                    <FeaturedLink addToRefs={addToRefs} />
                    <QuickLinks addToRefs={addToRefs} />
                    <ProjectCards addToRefs={addToRefs} />
                    <SupportLink addToRefs={addToRefs} />
                </div>
            </div>
        </div>
    );
};

export default Linktree;
