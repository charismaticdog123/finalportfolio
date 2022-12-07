import { Link, useMatch, useResolvedPath } from "react-router-dom"
// used this tutorial: https://www.youtube.com/watch?v=SLfhMt5OUPI

export default function NavigationBar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        CharismaticDog123
      </Link>
      <ul>
        <Link to="/intro">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>

      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}