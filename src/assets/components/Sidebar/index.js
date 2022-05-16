import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import marsprogramminglab from '../../images/MarsProgrammingLab.png'
import myName from '../../images/martavias.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar= () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={marsprogramminglab} alt="logo" />
            <img className= "sub-logo" src={myName} alt="MartaviasCary" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4de4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4de4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4de4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target ="_blank" rel='noreferrer' href='https://www.linkedin.com/in/martaviascary/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BEcxwTLuQSDa%2BDDAUpUvzJQ%3D%3D'>
                    <FontAwesomeIcon icon = {faLinkedin} color ="4d4d4e" />
                </a>
            </li>
        </ul>
        <ul>
            <li>
                <a target ="_blank" rel='noreferrer' href='https://github.com/MarsProgrammingLab'>
                    <FontAwesomeIcon icon = {faGithub} color ="4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar
