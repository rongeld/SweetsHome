import React, { PureComponent } from 'react'
import FormInput from '../form-input/FormInput'
import CustomBtn from '../custom-btn/CustomBtn';

import { auth, signInWithGoogle } from '../../firebase/firebaseUtils.js';

class SignIn extends PureComponent {
    state = {
        email: '',
        password: '',
    }
    handleSubmit = async e => {
        e.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: '',
            })
        } catch(err) {
            console.log(err)
        }
        
    }

    handleChange = ({ target }) => {
        const { value, name } = target;
        this.setState({ [name]: value })
    }
    render() {
        const { email, password } = this.state;
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label="Email" type="email" required value={email} id="email" name="email" />
                    <FormInput handleChange={this.handleChange} label="Password" type="password" required value={password} id="password" name="password" />
                    <div className="btns-sign-in-wrapper">
                        <CustomBtn type="submit">SIGN IN</CustomBtn>
                        <CustomBtn onClick={signInWithGoogle} isGoogleSignIn>Sign in with GOOGLE</CustomBtn>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn