import React from 'react'
import CollectionItem from '../collection-item/CollectionItem'

const PreviewCollection = React.forwardRef(({title, items}, ref) => (
    <div className="collection-preview" ref={ref}>
        <h1>{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((item, idx) => idx < 4).map(({id, ...itemProps}) => (
                    <CollectionItem key={id} id={id} {...itemProps} />
                ))
            }
        </div>
    </div>
))

export default PreviewCollection
