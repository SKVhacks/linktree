import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { Vibrant } from "node-vibrant/browser";

import { FaArrowUpFromBracket } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { LuCopyCheck } from "react-icons/lu";

import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import { WordRotate } from "@/components/ui/word-rotate";
import { AnimatedList } from "@/components/ui/animated-list";

import { profile } from "./data/Links";

import SocialMedia from "./pages/SocialMedia";
import QuickLinks from "./pages/QuickLinks";
import MusicCard from "./pages/MusicCard";
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

    const [bgGradient, setBgGradient] = useState([
        "#1c1d1f",
        "#3a3d40",
        "#b2d30",
    ]);

    const imgRef = useRef(null);

    const darken = (hex, amount = 0.55) => {
        const rgb = hex.match(/\w\w/g).map((v) => parseInt(v, 16));

        return `rgb(
        ${Math.floor(rgb[0] * amount)},
        ${Math.floor(rgb[1] * amount)},
        ${Math.floor(rgb[2] * amount)}
    )`;
    };
    const extractColors = async () => {
        try {
            const palette = await Vibrant.from(profile.image).getPalette();

            console.log(palette);

            const colors = [
                palette.Vibrant?.hex,
                palette.DarkVibrant?.hex,
                palette.Muted?.hex,
                palette.DarkMuted?.hex,
                palette.LightMuted?.hex,
                palette.LightVibrant?.hex,
            ].filter(Boolean);

            if (!colors.length) return;

            const gradient = colors
                .slice(0, 4)
                .map((c) => darken(c));

            while (gradient.length < 4) {
                gradient.push(gradient[gradient.length - 1]);
            }

            setBgGradient(gradient);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => setShowBadge(true), 1300);
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
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
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);

            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <div className="min-h-screen flex justify-center bg-[#121212] text-white font-sans">
            <div
                className="relative w-full max-w-lg min-h-screen overflow-hidden flex flex-col items-center transition-all duration-700"
                style={{
                    background: `linear-gradient(
        210deg,
       
         ${bgGradient[profile.color]} 40%,
          ${bgGradient[profile.color + 1]} 100%
    )`,
                }}
            >
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
                        className="w-[42px] h-[42px] rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/30 transition"
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
                            // onLoad={extractColors}
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
                        className={`text-lg font-normal text-gray-300 ${showBadge ? "opacity-100" : "opacity-0"
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
                    <MusicCard addToRefs={addToRefs} />
                    <SupportLink addToRefs={addToRefs} />
                </div>
            </div>
        </div>
    );
};

export default Linktree;