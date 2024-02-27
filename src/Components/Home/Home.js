import '../../App.css';
import './HomeStyle.css';
import gsap from 'gsap';
import { useLayoutEffect } from 'react';

const Home = () => {

    useLayoutEffect(() => {
        gsap.fromTo('.HeaderHome', { opacity: 0 }, { opacity: 1, duration: 3})
        gsap.fromTo('.homePar', {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 3})
    }, [])

    return (
        <div className='container'>
            <h2 className='HeaderHome'>We love flowers without reason</h2>
            <p className='homePar'>You can find here what you like</p>
        </div>
    )
}

export default Home;