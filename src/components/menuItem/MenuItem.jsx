import React from 'react'
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, ImageUrl, history, linkUrl }) => (
    <div className='menu-item' onClick={() => history.push(`${linkUrl}`)}>
        <ImageUrl className="menu-item-image" />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
        </div>
    </div>
)

export default withRouter(MenuItem);