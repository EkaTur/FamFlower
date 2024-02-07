const Contacts = () => {
    return (
        <div>
            <hr className='hrStyle' />
            <div className="contactsHeader">
                <h2>OUR CONTACTS</h2>
            </div>
            <div className="containerContacts">
                <h3>You can can contact us via phone number:</h3> 
                <a className="contactLink" href="tel:+31686158639">Call us</a>
            </div>
            <div className="containerContacts">
                <h3>Or via e-mail:</h3>
                <a className="contactLink" href="mailto:savosya23@gmail.com">Text us</a>
            </div>
            <div className="containerContacts">
                <h3>Also you are always welcome to visit us on this address:</h3>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d731.3863981441311!2d5.511970343993575!3d51.75914477012567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6fc8edb7bfc65%3A0xda9eb39c39ffb28!2sOrlando%20di%20Lassostraat%2C%205344%20AC%20Oss!5e0!3m2!1sen!2snl!4v1705946306438!5m2!1sen!2snl" width="600" height="450" style={{ border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Contacts;