import React from "react";
import { Switch } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";

export const AnimatedSwitch = ({ history, location, children, ...rest }) => {

    return (
        <PoseGroup
            flipMove={false}
        >
            <ContextRouteAnimation key={location.pathname}>
                <Switch location={location} {...rest}>
                    {children}
                </Switch>
            </ContextRouteAnimation>
        </PoseGroup>
    );
};

export default React.memo(AnimatedSwitch);

export const TIMING = {
    INSTANT: 0,
    FAST: 200,
    NORMAL: 400,
    SLOW: 4000
};

export const ContextRouteAnimation = posed.div({
    enter: { x: 0, opacity: 1, delay: 300, beforeChildren: true },
    exit: { x: 50, opacity: 0 }
});
