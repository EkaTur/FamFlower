import { dataTwo } from "./AboutUsData";
import { useState } from "react";

const AboutUs = () => {

    const [usPhoto, setUsPhoto] = useState(0);
    const { image, description } = dataTwo[usPhoto];

    const previousUsPhoto = () => {
        setUsPhoto((photo => {
            photo--;
            if (photo < 0) {
                return dataTwo.length - 1;
            }
            return photo;
        }))
    }
    
    const nextUsPhoto = () => {
        setUsPhoto((photo => {
            photo++;
            if (photo > dataTwo.length - 1) {
                photo = 0;
            }
            return photo;
        }))
    }

    return (
        <div>
            <hr className='hrStyle' />
            <div className="aboutHeader">
                <h2>About Us</h2>
            </div>
            <div className="containerUs">
                <h4>Welcome to our cozy corner of nature, where each flower is a work of art, grown with love and care! </h4>
            </div>
            <div className="containerUs">
                <img className="usPhoto" src={image} width='800px' alt="photoOfUs" height={550} />
            </div>
            <div className="containerUs parUsContainer">
                <p className="parUs">{description}</p>
            </div>
            <div className="UsButtonsCont">
                <button className="btnPrevious" onClick={previousUsPhoto}>Back</button>
                <button className="btnNext" onClick={nextUsPhoto}>Next</button>
            </div>
        </div>
    )
}

export default AboutUs;