import React from 'react'
import MenuItem from '../menuItem/MenuItem';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directrory/directory-selector'

const Directory = ({sections}) => (
  <div className="directory-menu-wrapper">
    <div className="directory-menu">
      {
        sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))
      }
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);