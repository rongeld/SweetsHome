import React, { Fragment } from 'react'
import CustomBtn from '../../components/custom-btn/CustomBtn';
import ContactImage from '../../assets/contactGif.gif'

const Card = () => {

    return (
        <Fragment>
            <form action="" id="contact" >
                <div id="logo" className="bouncing">
                <img src={ContactImage} alt="ContactImage"/>
                </div>
                <h1 id="title"> Contact Us  </h1>
                <p id="pre">
                    If you wish to congratulate us about our perfectly made cookies, or just to remind us how awesome we are, feel free to use this contact form.
		        </p>
                <div id="wrapper" className="clearfix">
                    <input type="text" className="has_icon" name="name" placeholder="Name" required />
                    <label className="icon-user" htmlFor="name"></label>

                    <input type="email" className="has_icon" name="email" placeholder="Email Address" required />
                    <label className="icon-envelope" htmlFor="name"></label>
                    <textarea name="" id="" placeholder="Enter your message" required />
                    <CustomBtn style={{position: 'relative'}} type="submit">SEND MESSAGE</CustomBtn>
                </div>
            </form>
        </Fragment >
    )
}

export default Card