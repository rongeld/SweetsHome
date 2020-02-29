import React from 'react'
import { connect } from 'react-redux'
import CustomButton from '../custom-btn/CustomBtn';
import { addCartItem } from '../../redux/cart/cart-actions';

const CollectionItem = ({ item, addCartItem }) => {
    const { name, price, imageUrl } = item;

    return (
    <div className="collection-item">
        <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>

        </div>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">${price}</span>
        </div>
        <CustomButton className='custom-button' inverted onClick={() => addCartItem(item)}>Add to cart</CustomButton>
    </div>
    )
}

export default connect(null, { addCartItem })(CollectionItem);