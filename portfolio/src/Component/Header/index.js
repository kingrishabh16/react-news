import {Link} from  'react-router-dom'
import './index.css'
const Header=()=>(
    <nav>
        <div className="navContainer">
            <ul className="nav-menu">
                <li className="menu-item">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/project" className="nav-link">
                        Project
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
)
export default Header