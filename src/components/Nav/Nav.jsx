import Link from "next/link"
import './NavStyles.css'
function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link className='Link' href="/">Inicio</Link>
        </li>
        <li>
          <Link className='Link' href="/about">Conocenos</Link>
        </li>
        <li>
          <Link className='Link' href="/new">Registros</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar