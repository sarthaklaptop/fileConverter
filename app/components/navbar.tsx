import Link from "next/link"


export const Navbar = () => {
    return <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn text-xl" href="/">
        fileConverter
      </a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><a>HOME</a></li>
        <li>
          <details>
            <summary>Other Services</summary>
            <ul className="bg-base-100 rounded-t-none p-2">
              <li><a>Convert to PDF</a></li>
              <li><a>Convert to PDF</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
}