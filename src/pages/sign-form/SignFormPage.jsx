import React from 'react'
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';
import posed from 'react-pose';

function SignFormPage() {
    return (
        <Wrapper className="sign-in-and-sign-up">
            <ItemSignIn />
            <ItemSignUp />
        </Wrapper>

    )
}

export default SignFormPage


const ItemSignIn = posed(SignIn)({
    enter: {
        x: 0, opacity: 1, transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 400,
        },
    },
    exit: {
        x: '-20%', opacity: 0, transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 400,
        }
    }
});
  


const ItemSignUp = posed(SignUp)({
    enter: {
        x: 0, opacity: 1, transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 400,
        },
    },
    exit: {
        x: 50, opacity: 0, transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 400,
        }
    }
});

const Wrapper = posed.div({});
  


