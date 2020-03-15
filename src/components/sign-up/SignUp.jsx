import React, { useState } from 'react'

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-btn/CustomBtn'
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user-actions'

const SignUp = React.forwardRef(({ signUpStart }, ref) => {
    const [userData, setUserData] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const { displayName, email, password, confirmPassword } = userData;

    const handleSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Password don`t match')
            return;
        }
        signUpStart({ email, password, displayName });
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    return (
        <div className="sign-up" ref={ref}>
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput type="text" name="displayName" value={displayName} onChange={handleChange} label="Display name" required />
                <FormInput type="email" name="email" value={email} onChange={handleChange} label="Email" required />
                <FormInput type="password" name="password" value={password} onChange={handleChange} label="Password" required />
                <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} label="Confirm password" required />
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </div>
    )
})

export default connect(null, { signUpStart }, null, { forwardRef: true })(SignUp);
