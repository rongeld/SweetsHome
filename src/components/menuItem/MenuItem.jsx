import React from 'react'
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, ImageUrl, history, linkUrl, color }) => (
    <div className='menu-item' onClick={() => history.push(`${linkUrl}`)}>
        <ImageUrl className="menu-item-image" />
        <div className="content" style={{backgroundColor: color }}>
            <h1 className="title">{title.toUpperCase()}</h1>
        </div>
    </div>
)

export default withRouter(MenuItem);