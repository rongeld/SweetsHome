import React from 'react'
import MenuItem from '../menuItem/MenuItem';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directrory/directory-selector'
import posed, { PoseGroup } from "react-pose";

const Directory = ({ sections }) => (
  <div className="directory-menu-wrapper">
    <div className="directory-menu">
      <PoseGroup>
        {
          sections.map(({ id, ...otherSectionProps }, i) => (
            <PosedComponent i={i} key={id} {...otherSectionProps} />
          ))
        }
      </PoseGroup>
    </div>
  </div>
)

const PosedComponent = posed(MenuItem)({
  enter: {
    x: 0, opacity: 1, transition: {
      type: "spring",
      duration: 400,
    },
    delay: ({ i }) => i * 80,
  },
  exit: {
    x: 50, opacity: 0, type: "tween",
    ease: "easeInOut",
  }
});

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);