import React from 'react'
import Fade from 'react-reveal/Fade';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, index, history, linkUrl, match }) => (
    <Fade top={!size} bottom={!!size} delay={size ? 150 * index : 0}>
        <div className={`${size} menu-item`} onClick={() => history.push(`${linkUrl}`)}>
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}>
            </div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    </Fade>
)

export default withRouter(MenuItem);