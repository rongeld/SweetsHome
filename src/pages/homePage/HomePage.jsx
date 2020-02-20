import React from 'react'
import Directory from '../../components/directory/Directory';
import posed from "react-pose";


const HomePage = () => (
    <PosedComponent className="homepage">
        <Directory />
    </PosedComponent>
)

const PosedComponent = posed.div({
    enter: {
        x: 0, opacity: 1, transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 400,
        },
        delay: ({ i }) => i * 100,
    },
    exit: {
        x: -50, opacity: 0, transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 400,
        }
    }
});

export default HomePage;