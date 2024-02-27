import { useLayoutEffect } from "react";
import { gsap } from 'gsap/all';
import icon from '../../Assets/icon.png';
import './LogoStyle.css';

const Logo = () => {

    useLayoutEffect(() => {
        gsap.fromTo('.headerLogo', { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 3, delay: 1 })
        gsap.fromTo('.logo', {y: -50, opacity: 0}, {y: 0, opacity: 1, duration: 3})
    }, [])

    return (
        <div>
            <div className='headerContainerLogo'>
                <h3 className="headerLogo">Fam Flowers</h3>
            </div>
            <div className='iconContainer'>
                <img className="logo" src={icon} alt='icon' width='150px' />
            </div>
        </div>
    )
}

export default Logo;