import './navbar.css'
import { useState } from 'react'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  window.addEventListener('click', (e) => {
    const validClasses = ["hamburger", "hamburgerMenu", "hamburgerIcon", "navbarItem", "[object SVGAnimatedString]"]
    if (!validClasses.includes(e.target.className.toString())) {
      setMenuOpen(false)
    }
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      setMenuOpen(false)
    }
  })

  return (
    <nav className='navbar'>
      <div className='navbarLeft'>
        <div className='hamburger' onClick={toggleMenu}>
          <svg className="hamburgerIcon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"
            style={{ fill: 'white', width: 25 }}>
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
          </svg>
        </div>
        {menuOpen && <div className="hamburgerMenu">
          <ul className='navLinks'>
            <li className='navbarItem'>
              <a href="/">Starships</a>
            </li>
            <li className='navbarItem'>
              People
            </li>
            <li className='navbarItem'>
              Films
            </li>
            <li className='navbarItem'>
              Vehicles
            </li>
            <li className='navbarItem'>
              Species
            </li>
            <li className='navbarItem'>
              Planets
            </li>
          </ul>
        </div>}
        <a href="/" className='logo'>
          SWAPI Demo
        </a>
      </div>
      <div className='navbarCenter'>
        <ul className='navLinks'>
          <li className='navbarItem'>
            <a href="/">Starships</a>
          </li>
          <li className='navbarItem'>
            People
          </li>
          <li className='navbarItem'>
            Films
          </li>
          <li className='navbarItem'>
            Vehicles
          </li>
          <li className='navbarItem'>
            Species
          </li>
          <li className='navbarItem'>
            Planets
          </li>
        </ul>
      </div>
      <div className='navbarRight'>
      </div>
    </nav>
  );
};

export default NavBar
