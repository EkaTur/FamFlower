import { useEffect, useRef } from "react";
import { gsap } from 'gsap/all';
import icon from '../../Assets/icon.png';
import './LogoStyle.css';

const Logo = () => {

    const header = useRef(null);
    const iconCont = useRef(null);

    useEffect(() => {
        gsap.to(header.current, {
        opacity: 1, delay: 1, duration: 2 
        });
    }, [header]);

    useEffect(() => {
        gsap.to(iconCont.current, {
        opacity: 1, delay: 1, duration: 2 
        });
    }, [iconCont]);

    return (
        <div>
            <div className='headerContainerLogo' ref={header}>
                <h3>Fam Flowers</h3>
            </div>
            <div className='iconContainer' ref={iconCont}>
                <img src={icon} alt='icon' width='150px' />
            </div>
        </div>
    )
}

export default Logo;