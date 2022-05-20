import { Link } from 'react-router-dom';
import LogoTitle from '../../images/M-transparent.png'
import './index.scss';

const Home = () => {
    

    return (
        <div className="contain home-page">
            <div className="text-zone">
                <h1> Hi, <br /> I'm 
                <img src={LogoTitle} alt="developer" />
                artavias Cary
                <br />
                CS major
                </ h1>
                <h2> Frontend Engineer</h2>
                <Link to="/contact" className='flat-button'>Contact me</Link>
            </div>

        </div>
    );
}

export default Home;