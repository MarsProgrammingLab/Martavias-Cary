import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import LogoTitle from '../../images/M-transparent.png'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'r', 't', 'a', 'v', 'i', 'a', 's']
    const jobArray = ['C', 'S', ' ', 'M', 'a', 'j', 'o', 'r'] 

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    }, []);
    
    return (
        <div className="contain home-page">
            <div className="text-zone">
                <h1> 
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span> 
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters  letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters  letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
                </ h1>
                <h2> Software Engineering Student</h2>
                <Link to="/contact" className='flat-button'>Contact me</Link>
            </div>

        </div>
    );
}

export default Home;