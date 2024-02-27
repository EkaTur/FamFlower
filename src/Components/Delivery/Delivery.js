import './DeliveryStyle.css';
import gsap from 'gsap';
import { useLayoutEffect } from 'react';

const Delivery = () => {

    useLayoutEffect(() => {
        gsap.fromTo('.list', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 2, stagger: 0.5 })
        gsap.fromTo('.headerDelivery', {opacity: 0}, {opacity: 1, duration: 3})
    }, [])

    return (
        <div>
            <hr className='hrStyle' />
            <div className="headerDelivery">
                <h2>OUR DELIVERY</h2>
            </div>
            <div className="deliveryContainer">
                <ul>
                    <li className='list'>Delivery is an integral part of our service, designed to make your flower-receiving experience even more convenient and delightful. The delivery cost depends on urgency and distance, but we assure you that each bouquet will reach you with care and on time.</li>
                    <li className='list'>For those who prefer planning ahead, there's an option to arrange delivery in advance at a more favorable price. However, we are always ready to discuss and adapt the terms based on your needs, so feel free to reach out to us to clarify details.</li>
                    <li className='list'>We value your comfort, hence we offer several convenient ways to order delivery: order from our web site or <a className="deliveryLink" href="tel:+31686158639">Call us</a> or <a className="deliveryLink" href="mailto:savosya23@gmail.com">Text us</a> or directly in-store. Pre-ordering flowers is also available in our shop, allowing you to plan your gift in advance and ensure its perfect delivery. Trust us, and your delivery will be a pleasant conclusion to your floral experience.</li>
                </ul>
            </div>
        </div>
    )
}

export default Delivery;