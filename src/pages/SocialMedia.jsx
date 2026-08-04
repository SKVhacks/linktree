
import { socialLinks } from "../data/Links";
import { FaTiktok } from "react-icons/fa6";

const SocialMedia = ({addToRefs}) => {
  return (
    <div className="flex gap-3 mb-8 text-2xl">
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient
            id="instagram-gradient"
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#FFDD55" />
            <stop offset="25%" stopColor="#FF543E" />
            <stop offset="50%" stopColor="#C837AB" />
            <stop offset="100%" stopColor="#5851DB" />
          </linearGradient>
        </defs>
      </svg>

      {socialLinks
        .filter((social) => social.available)
        .map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.platform}
              href={social.link}
              ref={addToRefs}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:scale-110 transition ${social.wrapperClass || ""}`}
            >
              {social.custom ? (
                <div className="relative w-6 h-6">
                  <FaTiktok className="absolute text-[#25F4EE] -translate-x-[2px]" />
                  <FaTiktok className="absolute text-[#FE2C55] translate-x-[2px]" />
                  <FaTiktok className="absolute text-black" />
                </div>
              ) : (
                <Icon className={social.iconClass} />
              )}
            </a>
          );
        })}
    </div>
  );
};

export default SocialMedia;