import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { projects } from "../data/Links";

// One rectangle card per project (same size as the old music card).
// Add/remove entries in `projects` (src/data/Links.js) and the list grows/shrinks.
const ProjectCards = ({ addToRefs }) => {
    const visible = projects.filter((p) => p.available);
    if (!visible.length) return null;

    return (
        <>
            <div ref={addToRefs} className="flex gap-1 text-sm items-center">
                <HiOutlineSquares2X2 className="text-xs" style={{ color: "var(--theme-accent)" }} />
                <p className="text-gray-400">Projects</p>
            </div>

            {visible.map((project) => (
                <a
                    key={project.title}
                    ref={addToRefs}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                >
                    <div
                        className="relative h-48 w-full overflow-hidden rounded-2xl border border-white/20
                                   bg-black/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)]
                                   transition active:scale-95"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </a>
            ))}
        </>
    );
};

export default ProjectCards;
