import React, { PureComponent } from 'react'

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-btn/CustomBtn'
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user-actions'

class SignUp extends PureComponent {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        const { signUpStart } = this.props;
        if (password !== confirmPassword) {
            alert('Password don`t match')
            return;
        }
        signUpStart({ email, password, displayName });
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        const { innerRef } = this.props;
        return (
            <div className="sign-up" ref={innerRef}>
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange} label="Display name" required />
                    <FormInput type="email" name="email" value={email} onChange={this.handleChange} label="Email" required />
                    <FormInput type="password" name="password" value={password} onChange={this.handleChange} label="Password" required />
                    <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="Confirm password" required />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}


const ConnectedSignUp = connect(null, { signUpStart })(SignUp);

export default React.forwardRef((props, ref) => <ConnectedSignUp
    innerRef={ref} {...props}
/>);