// ─────────────────────────────────────────────────────────────
// Edit THIS file to change what shows up on the page.
// Every link has `available: true/false` — set it to false to
// hide a platform without deleting your info (e.g. you quit
// Twitter but might come back).
//
// `platform` must match a key in `src/data/platformConfig.js`
// (that's where the icon/colors/labels live). Adding a brand
// new platform? Add its look there, then reference it here.
// ─────────────────────────────────────────────────────────────

import { FaFacebook, FaInstagram, FaLinkedinIn, FaReddit, FaSnapchat, FaThreads, FaTiktok, FaTwitch, FaXTwitter} from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { FaSteam } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
// Profile info at the top of the page
export const profile = {
    name: "Gadget Vishwa",
    image: "https://media.gadgetvishwa.in/images/profile.png",
    color:1, // 0 -1  color theme
    titles: ["Software Developer", "IOT Engineer", "PCB Designer", "Drone Pilot"],
};

// Row of social icons under the name
// If you don't have a Twitch account, simply set link: "#" and available: false. It won't be displayed on the page.
export const socialLinks = [
      {
    platform: "discord",
    name: "Discord",
    link: "https://discord.com/users/gadget_vishwa",
    available: true,
    icon: FaDiscord,
    iconClass: "text-indigo-500",
  },
  {
    platform: "facebook",
    name: "Facebook",
    link: "https://www.facebook.com/share/1CqwohZMNL/",
    available: true,
    icon: FaFacebook,
    wrapperClass: "bg-blue-500 rounded-full",
    iconClass: "text-white",
  },
  {
    platform: "instagram",
    name: "Instagram",
    link: "https://www.instagram.com/gadget_vishwa/",
    available: true,
    icon: FaInstagram,
    iconClass: "instagram-gradient",
  },
  {
    platform: "linkedin",
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/s-vishwa/",
    available: true,
    icon: FaLinkedinIn,
    wrapperClass: "bg-white rounded-md",
    iconClass: "text-blue-700 p-0.5",
  },
  {
    platform: "reddit",
    name: "Reddit",
    link: "https://www.reddit.com/user/Gadget_Vishwa/",
    available: true,
    icon: FaReddit,
    wrapperClass: "bg-white rounded-full",
    iconClass: "text-orange-600",
  },
  {
    platform: "snapchat",
    name: "Snapchat",
    link: "https://www.snapchat.com/@gadget_vishwa",
    available: true,
    icon: FaSnapchat,
    iconClass: "text-yellow-300",
  },
  {
    platform: "telegram",
    name: "Telegram",
    link: "https://t.me/Gadget_Vishwa",
    available: true,
    icon: RiTelegram2Fill,
    iconClass: "text-blue-500",
  },
  {
    platform: "threads",
    name: "Threads",
    link: "https://www.threads.com/@gadget_vishwa",
    available: true,
    icon: FaThreads,
    iconClass: "text-white",
  },
  {
    platform: "tiktok",
    name: "TikTok",
    link: "https://www.tiktok.com/@gadget_vishwa",
    available: true,
    custom: true,
    icon: FaTiktok,
  },
  {
    platform: "twitch",
    name: "Twitch",
    link: "https://www.twitch.tv/gadget_vishwa",
    available: true,
    icon: FaTwitch,
    iconClass: "text-violet-500",
  },
  {
    platform: "twitter",
    name: "X",
    link: "https://x.com/Gadget_Vishwa",
    available: true,
    icon: FaXTwitter,
  },
];

// The big featured card near the top (portfolio / website preview)
// If you don't have a portfolio, simply set link: "#" and available: false. It won't be displayed on the page.
export const featuredLink = {
    platform: "portfolio",
    link: "https://gadgetvishwa.in",
    available: true,
    label: "Portfolio",
    subtitle: "gadgetvishwa.in",
    preview: "https://media.gadgetvishwa.in/images/projects/share.png",
};

// The grid of pill buttons (Github / Gmail / Steam / Medium ...)
// If you don't have a Steam, them remove {platform:............-white}, fully. It won't be displayed on the page.
export const quickLinks = [
  {
    platform: "Github",
    link: "https://github.com/SKVhacks",
    icon: FiGithub,
    className: "bg-black text-white",
  },
  {
    platform: "Gmail",
    link: "mailto:support@gadgetvishwa.in",
    image: "https://media.gadgetvishwa.in/images/projects/gmail.png",
    className: "bg-white",
  },
   {
    platform: "Medium",
    link: "https://medium.com/@gadget_vishwa",
    icon: SiMedium,
    className: "bg-white text-black",
  },
  {
    platform: "Steam",
    link: "https://steamcommunity.com/id/gadget_vishwa/",
    icon: FaSteam,
    className: "bg-[#1B4DDB] text-white",
  },
 
];


// Music card — swap `platform` to "spotify" | "ytmusic" | "appleMusic" | "soundcloud | "tidal" 
// If you don't have a music link, simply set link: "#" and available: false. It won't be displayed on the page.
export const musicLink = {
    theme:2, // 1-2
    platform: "appleMusic", // "spotify" | "ytmusic" | "appleMusic" | "soundcloud | "tidal"
    link: "https://music.apple.com/in/album/luz-roja-ep/1855955695",
    available: true,
    title: "Luz Roja",
    artist: "bxbq",
    duration: 110, // in seconds
    cover: "https://media.gadgetvishwa.in/images/projects/luz.jpeg",
};

// Support / donation button at the bottom
// If you don't have a support link, simply set link: "#" and available: false. It won't be displayed on the page.
export const supportLink = {
    platform: "buymeacoffee", // "paypal" | "buymeacoffee" | "kofi"
    link: "https://www.paypal.com/paypalme/GadgetVishwa",
    available: true,
};
