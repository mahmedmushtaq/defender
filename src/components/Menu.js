import React from "react"
import Link from "./Link"
const classNames = require("classnames")

const primary = [
  { label: "Home", to: "/", className: "bg-red" },
  { label: "About Us", to: "/about", className: "bg-orange" },
  { label: "Films", to: "/films", className: "bg-gray" },
  {
    label: "Photo Essays",
    to: "/articles/photo-essays",
    className: "bg-blue",
  },
  { label: "Donate", to: "", className: "bg-green" },
]

const secondary = [
  { label: "Shop", to: "/shop" },
  { label: "Contact", to: "/contact" },
]

export default ({ toggle, open }) => {
  return (
    <div
      className={classNames(
        "menu-bg bg-yellow bg-opacity-80 fixed inset-0 flex items-stretch z-50 cursor-pointer transition-all duration-300",
        { open: open }
      )}
      onClick={toggle}
    >
      <div
        className={classNames(
          "menu bg-white w-5/6 md:w-1/3 flex flex-col cursor-auto",
          "duration-300 transition-all",
          { open: open }
        )}
        onClick={e => e.stopPropagation()}
        style={{ transform: "translate3d(-100vw, 0, 0)" }}
      >
        <div className="bg-yellow px-12 py-4">
          <img className="h-32" src="/defender-d.svg" />
        </div>
        {primary.map((link, i) => (
          <Link
            className={classNames(
              link.className,
              "text-yellow font-bureau-wide text-2xl py-4 px-6 md:px-12 font-bold uppercase border-b"
            )}
            to={link.to}
            key={i}
          >
            {link.label}
          </Link>
        ))}
        {secondary.map((link, i) => (
          <Link
            className="py-3 px-6 md:px-12 font-snell text-2xl border-b"
            to={link.to}
            key={i}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}