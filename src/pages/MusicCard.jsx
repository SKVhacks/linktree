import React, { useEffect, useState } from 'react'
import { musicLink } from "../data/Links";
import AudioVisualizer from "../components/Audiovisualizer"
import { HiMusicalNote } from "react-icons/hi2";
import { FaSpotify, FaRegHeart } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { FaSoundcloud } from "react-icons/fa6";
import { SiTidal } from "react-icons/si";
import { IoIosPause } from "react-icons/io";
const platformConfig = {
    appleMusic: {
        name: "Apple Music",
        bg: "from-pink-300 to-pink-600",
        // bg: "from-white/60 to-red-600",
        icon: HiMusicalNote,
        iconBg: "bg-white",
        iconColor: "text-red-600",
    },
    spotify: {
        name: "Spotify",
        bg: "from-green-800 to-green-400",
        icon: FaSpotify,
        iconBg: "bg-black",
        iconColor: "text-green-500",
    },
    ytmusic: {
        name: "YouTube Music",
        bg: "from-red-400 to-red-700",
        icon: SiYoutubemusic,
        iconBg: "bg-white",
        iconColor: "text-red-600",
    },
    soundcloud: {
        name: "SoundCloud",
        bg: "from-orange-400 to-orange-600",
        icon: FaSoundcloud,
        iconBg: "bg-white",
        iconColor: "text-orange-500",
    },
    tidal: {
        name: "TIDAL",
        bg: "from-zinc-700 to-black",
        icon: SiTidal,
        iconBg: "bg-white",
        iconColor: "text-black",
    },
};


const MusicCard = ({ addToRefs }) => {
    const config = platformConfig[musicLink.platform];
    const Icon = config.icon;
    const duration = musicLink.duration; // 3 minutes

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => {
                if (prev >= duration) return 0;
                return prev + 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const progress = (current / duration) * 100;

    const formatTime = (sec) => {
        const m = Math.floor(sec / 60);
        const s = String(sec % 60).padStart(2, "0");
        return `${m}:${s}`;
    };
    return (
        <>
            {musicLink.available && (
                <>
                    <div ref={addToRefs} className="flex gap-1 text-sm">
                        <FaRegHeart className="text-xs mt-1 text-red-400" /> <p className="text-gray-400">Favourite</p>
                    </div>
                    <a
                        ref={addToRefs}
                    // href={musicLink.link}
                    // target="_blank"
                    // rel="noopener noreferrer"
                    // className="group block"
                    >
                        {musicLink.theme === 1 ? (
                            <div className={`p-4 rounded-2xl bg-gradient-to-br ${config.bg}`}>
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className={`${config.iconBg} p-1 rounded-lg`}>
                                            <Icon size={25} className={config.iconColor} />
                                        </div>

                                        <span className="text-sm font-medium text-white">
                                            {config.name}
                                        </span>
                                    </div>

                                    <div className="mr-1.5">
                                        <AudioVisualizer
                                            bars={4}
                                            color="#fff"
                                            height={25}
                                            barWidth={3}
                                            gap={3}
                                            active
                                        />
                                    </div>
                                </div>

                                <div className="mt-2 overflow-hidden rounded-2xl">
                                    <img
                                        src={musicLink.cover}
                                        alt={musicLink.title}
                                        className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="mt-1.5 flex justify-center">
                                    <h3 className="flex items-center font-semibold text-white">
                                        <IoIosPause className="mt-0.5 mr-1" />
                                        {musicLink.title}
                                    </h3>
                                </div>
                                <div className="mt-1">
                                    <div className="flex items-center gap-3">

                                        <div className="relative h-1 flex-1 rounded-full bg-white/20 overflow-hidden">
                                            <div
                                                className="absolute left-0 top-0 h-full rounded-full bg-white transition-all duration-1000 ease-linear"
                                                style={{
                                                    width: `${progress}%`,
                                                }}
                                            />

                                            <div
                                                className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white transition-all duration-1000 ease-linear"
                                                style={{
                                                    left: `calc(${progress}% - 6px)`,
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex justify-between text-xs text-white/60">
                                        <span>{formatTime(current)}</span>
                                        <span>{formatTime(duration)}</span>
                                    </div>
                                </div>

                            </div>
                        ) : (
                            <div className={`rounded-2xl p-4 bg-gradient-to-br ${config.bg} `}>
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <div className={`${config.iconBg} rounded-lg p-1`}>
                                            <Icon
                                                size={24}
                                                className={config.iconColor}
                                            />
                                        </div>

                                        <span className="text-sm font-medium text-white">
                                            {config.name}
                                        </span>
                                    </div>

                                    <AudioVisualizer
                                        bars={4}
                                        color="#fff"
                                        height={24}
                                        barWidth={3}
                                        gap={3}
                                        active
                                    />
                                </div>
                                <div className={`flex gap-4 `}>
                                    {/* Album Cover */}
                                    <img
                                        src={musicLink.cover}
                                        alt={musicLink.title}
                                        className="h-30 w-30 rounded-xl object-cover shrink-0"
                                    />

                                    {/* Right Content */}
                                    <div className="flex flex-1 flex-col  justify-between">
                                        
                                        <div className=" absolute bottom-15">
                                            <h3 className="text-xl font-semibold text-white">
                                                {musicLink.title}
                                            </h3>
                                            <p className='text-sm text-white opacity-70 absolute top-5.5 '>{musicLink.artist}</p>
                                        </div>

                                        {/* Player */}
                                        <div className="absolute bottom-2 left-37 right-5 ">
                                            <div className="flex items-center gap-3">
                                                <IoIosPause
                                                    size={22}
                                                    className="text-white"
                                                />

                                                <div className="relative h-1 flex-1 rounded-full bg-white/20 overflow-hidden">
                                                    <div
                                                        className="absolute left-0 top-0 h-full rounded-full bg-white transition-all duration-1000 ease-linear"
                                                        style={{
                                                            width: `${progress}%`,
                                                        }}
                                                    />

                                                    <div
                                                        className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white transition-all duration-1000 ease-linear"
                                                        style={{
                                                            left: `calc(${progress}% - 6px)`,
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex justify-between text-xs text-white/60">
                                                <span>{formatTime(current)}</span>
                                                <span>{formatTime(duration)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </a>
                </>
            )}
        </>
    )
}

export default MusicCard