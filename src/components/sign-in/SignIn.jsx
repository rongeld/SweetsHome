import React, { useState } from 'react'
import FormInput from '../form-input/FormInput'
import CustomBtn from '../custom-btn/CustomBtn';
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user-actions';


const SignIn = React.forwardRef(({ emailSignInStart, googleSignInStart }, ref) => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })
    const { email, password } = userData;
    const handleSubmit = async e => {
        e.preventDefault();
        emailSignInStart({ email, password })
    }

    const handleChange = ({ target }) => {
        const { value, name } = target;
        setUserData({ ...userData, [name]: value })
    }
    return (
        <div className="sign-in" ref={ref}>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput handleChange={handleChange} label="Email" type="email" required value={email} id="email" name="email" />
                <FormInput handleChange={handleChange} label="Password" type="password" required value={password} id="password" name="password" />
                <div className="btns-sign-in-wrapper">
                    <CustomBtn type="submit">SIGN IN</CustomBtn>
                    <CustomBtn type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in with GOOGLE</CustomBtn>
                </div>

            </form>
        </div>
    )
})

export default connect(null, { googleSignInStart, emailSignInStart }, null, { forwardRef: true })(SignIn);
