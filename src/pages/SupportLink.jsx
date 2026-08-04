import React from 'react'
import { supportLink } from '../data/Links'
const supportConfig = {
    paypal: {
        image:
            "https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg",
        text: "Donate with PayPal",
        bg: "bg-gradient-to-r from-[#0070BA] to-[#009CDE]",
        textColor: "text-white",
    },

    buymeacoffee: {
        image:
            "https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png",
        isFullImage: true,
    },

    kofi: {
        image: "https://storage.ko-fi.com/cdn/brandasset/v2/support_me_on_kofi_blue.png",
        isFullImage: true,
    },
};

const config = supportConfig[supportLink.platform];

const SupportLink = ({ addToRefs }) => {
    return (
        <div>
            {supportLink.available && (
                <a
                    ref={addToRefs}
                    href={supportLink.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto  flex justify-center hover:scale-105 transition"
                >
                    {config.isFullImage ? (
                        <img
                            src={config.image}
                            alt={supportLink.platform}
                            className="h-[60px] object-contain"
                        />
                    ) : (
                        <div
                            className={`flex h-[60px] w-[217px] items-center justify-center gap-3 rounded-xl ${config.bg}`}
                        >
                            <img
                                src={config.image}
                                alt="PayPal"
                                className="h-8 w-8"
                            />
                            <span className={`font-semibold ${config.textColor}`}>
                                {config.text}
                            </span>
                        </div>
                    )}
                </a>
            )}
        </div>
    )
}
export default SupportLink;
