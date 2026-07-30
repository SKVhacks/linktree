import { useState } from "react";
import {
    FaInstagram,
    FaTiktok,
    FaSnapchat,
    FaTelegram,
    FaXTwitter,
    FaReddit,
    FaLinkedin,
    FaArrowUpFromBracket,
} from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FiGithub } from "react-icons/fi"
import { MdVerified } from "react-icons/md";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal"
import { WordRotate } from "@/components/ui/word-rotate"
import { HiMusicalNote } from "react-icons/hi2";
import { LuCopyCheck } from "react-icons/lu";
import { AnimatedList } from "@/components/ui/animated-list"



const Linktree = () => {
    const [copied, setCopied] = useState(false);
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
            <div className="relative w-full max-w-lg min-h-screen overflow-hidden flex flex-col items-center bg-gradient-to-b from-[#1c1d1f] via-[#3a3d40] to-[#2b2d30]">
                <div className="absolute top-5  right-0 flex justify-between px-5 z-10">
                    <button
                        onClick={copyUrl}
                        className="w-[42px] h-[42px] rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/30 transition">
                        <FaArrowUpFromBracket />
                    </button>
                    <div className="absolute top-[52px] left-1/2 -translate-x-1/2 z-50">
                        <AnimatedList delay={1000}>
                            {copied && (
                                <div
                                    key="copied-toast"
                                    className="backdrop-blur-3xl flex items-center gap-2 rounded-full bg-black/50  border border-white/10 px-4 py-2 text-sm font-medium text-white whitespace-nowrap shadow-lg"
                                >
                                    <LuCopyCheck className="text-xl text-green-500" /> Link copied!
                                </div>
                            )}
                        </AnimatedList>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center text-center">

                    <div className="relative w-full h-[420px] flex justify-center items-end">
                        <img
                            src="/pic1.png"
                            alt="Gadget Vishwa"
                            className="w-full h-full object-cover grayscale contrast-110"
                            style={{
                                WebkitMaskImage:
                                    "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
                                maskImage:
                                    "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
                            }}
                        />
                    </div>
                    <div className="-mt-3 flex items-center justify-center gap-2 relative">
                        <h1 className="text-[42px] font-semibold tracking-tight drop-shadow-lg leading-none">
                            <DiaTextReveal
                                text="Gadget Vishwa"
                                once
                                textColor="white"
                            />
                        </h1>

                        <MdVerified className="absolute -top-0.5 -right-5.5 text-[22px] text-blue-600 shrink-0" />
                    </div>

                    <p className="text-lg font-normal text-gray-300">

                        <WordRotate duration={1500} words={["Software Developer", "IoT Enthusiast", "PCB Designer", "Drone Piolet"]} />
                    </p>

                    <div className="flex gap-4 mb-8 text-2xl">

                        <svg width="0" height="0" className="absolute">
                            <defs>
                                <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#FFDD55" />
                                    <stop offset="25%" stopColor="#FF543E" />
                                    <stop offset="50%" stopColor="#C837AB" />
                                    <stop offset="100%" stopColor="#5851DB" />
                                </linearGradient>
                            </defs>
                        </svg>


                        <svg width="0" height="0" className="absolute">
                            <defs>
                                <linearGradient id="tiktok-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#25F4EE" />
                                    <stop offset="50%" stopColor="#000000" />
                                    <stop offset="100%" stopColor="#FE2C55" />
                                </linearGradient>
                            </defs>
                        </svg>


                        <a href="https://www.instagram.com/gadget_vishwa/" className="hover:scale-110 transition">
                            <FaInstagram className="instagram-gradient" />
                        </a>
                        <a href="https://www.linkedin.com/in/s-vishwa/" className="hover:scale-110 transition">
                            <FaLinkedin className="text-blue-800" />
                        </a>
                        <a href="https://www.reddit.com/user/Gadget_Vishwa/" className="hover:scale-110 transition">
                            <FaReddit className="text-orange-600" />
                        </a>
                        <a href="https://www.snapchat.com/@gadget_vishwa" className="hover:scale-110 transition">
                            <FaSnapchat className="text-yellow-300" />
                        </a>
                        <a href="https://t.me/Gadget_Vishwa" className="hover:scale-110 transition">
                            <FaTelegram className="text-blue-500" />
                        </a>
                        <a href="https://www.tiktok.com/@gadget_vishwa" className="hover:scale-110 transition">
                            <div className="relative w-6 h-6">
                                <FaTiktok className="absolute text-[#25F4EE] -translate-x-[2px]" />
                                <FaTiktok className="absolute text-[#FE2C55] translate-x-[2px]" />
                                <FaTiktok className="absolute text-black" />
                            </div>
                        </a>
                        <a href="https://x.com/Gadget_Vishwa" className="hover:scale-110 transition">
                            <FaXTwitter />
                        </a>
                    </div>
                </div>

                <div className="w-full px-5 flex flex-col gap-4 mb-10">

                    <a
                        href="https://gadgetvishwa.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block w-full"
                    >
                        <div className="p-4 overflow-hidden rounded-3xl border border-white/20 bg-slate-900/90 backdrop-blur-xl  font-bold  transition active:scale-95">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="bg-white p-1 rounded-lg text-lime-500 text-xl w-8 text-center h-8">
                                    V
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-base font-semibold text-white">
                                        Portfolio
                                    </h2>
                                    <p className="text-xs text-zinc-400">
                                        gadgetvishwa.xyz
                                    </p>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-lg">
                                <img
                                    src="https://media.gadgetvishwa.xyz/images/projects/share.png"
                                    alt="Portfolio Preview"
                                    className="w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </a>

                    <div className="flex gap-4 justify-center w-full mx-auto px-2">
                        <a
                            href="https://github.com/SKVhacks"
                            className="w-full relative flex justify-center items-center rounded-full bg-black  px-6 py-[18px] font-normal text-xl  transition active:scale-95 hover:scale-103"
                        >
                            <FiGithub className="text-2xl mr-2" /> Github

                        </a>

                        <a
                            href="mailto:gadgetvishwa.official@gmail.com"
                            className="w-full relative flex justify-center items-center rounded-full bg-white transition active:scale-95 hover:scale-103"
                        >
                            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r7.png" alt="" srcset="" />
                        </a>
                    </div>

                    <div className="flex gap-1 text-sm">
                        <FaRegHeart className="text-xs mt-1 text-red-400" /> <p className="text-gray-400">Favourite</p>
                    </div>

                    <a
                        href="https://music.apple.com/in/album/luz-roja-ep/1855955695"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                    >

                        <div className="p-4 bg-gradient-to-br from-pink-300  to-pink-600 rounded-2xl">
                            {/* Header */}
                            <div className="flex items-center gap-2">
                                <div className="bg-white p-1 rounded-lg">
                                    <HiMusicalNote size={25} className="text-red-600" />
                                </div>
                                <span className="text-sm font-medium text-white text-center">
                                    Apple Music
                                </span>
                            </div>

                            <div className="mt-2 overflow-hidden rounded-2xl">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg5sSaGvDCdV70ZLzl-tEqJ7OtUURgnT0zWiWhcbknAQ&s=10"
                                    alt="Album Cover"
                                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            {/* Song */}
                            <div className="mt-1.5 flex justify-center">
                                <div className="flex items-end gap-1 h-5 mr-2">
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                </div>
                                <h3 className=" font-semibold text-white">
                                    Luz Roja -bxkq
                                </h3>
                            </div>

                        </div>
                    </a>
                </div>
                <a
                    href="https://www.paypal.com/paypalme/GadgetVishwa"

                    className="mt-auto mb-5 shadow-lg hover:scale-105 transition"
                >

                    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me a Coffee" className="h-[60px] w-[217px]" />
                </a>
            </div>
        </div>
    );
};

export default Linktree;
