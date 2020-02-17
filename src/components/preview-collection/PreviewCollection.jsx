import React from 'react'
import CollectionItem from '../collection-item/CollectionItem'

const PreviewCollection = ({title, items}) => (
    <div className="collection-preview">
        <h1>{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((item, idx) => idx < 4).map(({id, ...itemProps}) => (
                    <CollectionItem key={id} id={id} {...itemProps} />
                ))
            }
        </div>
    </div>
)

export default PreviewCollection
