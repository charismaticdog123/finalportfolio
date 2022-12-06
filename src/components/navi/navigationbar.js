import { Link, useMatch, useResolvedPath } from "react-router-dom"
// used this tutorial: https://www.youtube.com/watch?v=SLfhMt5OUPI

export default function NavigationBar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        CharismaticDog123
      </Link>
      <ul>
        <CustomLink to="/intro">Home</CustomLink>
        <CustomLink to="/projects">Projects</CustomLink>
        <CustomLink to="/about">About</CustomLink>

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