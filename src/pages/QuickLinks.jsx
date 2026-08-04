import React from 'react'
import { quickLinks } from "../data/Links";
const QuickLinks = ({addToRefs}) => {
  return (
    <div
  ref={addToRefs}
  className="grid grid-cols-2 gap-2"
>
  {quickLinks.map((item, index) => {
    const Icon = item.icon;
    const isLast = index === quickLinks.length - 1;
    const isOdd = quickLinks.length % 2 !== 0;

    return (
      <a
        key={item.platform}
        href={item.link}
        className={`
          h-16 flex items-center justify-center gap-3
          rounded-full transition hover:scale-[1.03] active:scale-95
          ${item.className}
          ${isOdd && isLast ? "col-span-2" : ""}
        `}
      >
        {item.image ? (
          <img
            src={item.image}
            alt={item.platform}
            className="object-contain"
          />
        ) : (
          <>
            <Icon className="text-3xl" />
            <span className="text-xl font-medium">{item.platform}</span>
          </>
        )}
      </a>
    );
  })}
</div>
  )
}

export default QuickLinks