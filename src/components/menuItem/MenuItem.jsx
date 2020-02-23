import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const MenuItem = React.forwardRef(({ title, ImageUrl, linkUrl, color }, ref) => (
    <Link className='menu-item' to={linkUrl} ref={ref}>
        <ImageUrl className="menu-item-image" />
        <div className="content" style={{backgroundColor: color }}>
            <h1 className="title">{title.toUpperCase()}</h1>
        </div>
    </Link>
))

export default connect(null, null, null, { forwardRef: true })(MenuItem);