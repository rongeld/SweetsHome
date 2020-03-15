import React, { PureComponent } from 'react'
import FormInput from '../form-input/FormInput'
import CustomBtn from '../custom-btn/CustomBtn';
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user-actions';
class SignIn extends PureComponent {
    state = {
        email: '',
        password: '',
    }
    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        const { emailSignInStart } = this.props;

        emailSignInStart({ email, password })
    }

    handleChange = ({ target }) => {
        const { value, name } = target;
        this.setState({ [name]: value })
    }
    render() {
        const { email, password } = this.state;
        const { innerRef, googleSignInStart } = this.props;
        return (
            <div className="sign-in" ref={innerRef}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label="Email" type="email" required value={email} id="email" name="email" />
                    <FormInput handleChange={this.handleChange} label="Password" type="password" required value={password} id="password" name="password" />
                    <div className="btns-sign-in-wrapper">
                        <CustomBtn type="submit">SIGN IN</CustomBtn>
                        <CustomBtn type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in with GOOGLE</CustomBtn>
                    </div>

                </form>
            </div>
        )
    }
}

const ConnectedSignIn = connect(null, { googleSignInStart, emailSignInStart })(SignIn);

export default React.forwardRef((props, ref) => <ConnectedSignIn
    innerRef={ref} {...props}
/>);