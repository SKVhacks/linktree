import React from 'react'
import { featuredLink } from '../data/Links'
const FeaturedLink = ({ addToRefs }) => {
    return (
        <div>
            {featuredLink.available &&
                <a
                    ref={addToRefs}
                    href={featuredLink.link}
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
                                    {featuredLink.label}
                                </h2>
                                <p className="text-xs text-zinc-400">
                                    {featuredLink.subtitle}
                                </p>
                            </div>
                        </div>
                        <div className="overflow-hidden rounded-lg">
                            <img
                                src={featuredLink.preview}
                                alt="Portfolio Preview"
                                className="w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </a>
            }
        </div>
    )
}

export default FeaturedLink