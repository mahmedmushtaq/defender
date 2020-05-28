import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header className="px-24 fixed top-0 inset-x-0">
    <div className="container border-b-2 border-black">
      <h1 className="text-center text-6xl">
        <Link to="/">Defender</Link>
      </h1>
    </div>
  </header>
)

export default Header
