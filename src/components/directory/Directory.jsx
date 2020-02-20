import React, { PureComponent } from 'react'
import MenuItem from '../menuItem/MenuItem';

const sections = [
  {
    title: 'cakes',
    imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/carrot-cake.jpg',
    id: 1,
    linkUrl: 'shop/cakes'
  },
  {
    title: 'pies',
    imageUrl: 'https://oldworldgardenfarms.com/wp-content/uploads/2019/07/featured-blueberry-pie.jpg',
    id: 2,
    linkUrl: 'shop/pies'
  },
  {
    title: 'cookies',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/2ChocolateChipCookies.jpg',
    id: 3,
    linkUrl: 'shop/cookies'
  },
  {
    title: 'donats',
    imageUrl: 'https://i.pinimg.com/474x/b3/ff/20/b3ff20e0d435e0a095b8ec7875ea90cb.jpg',
    size: 'large',
    id: 4,
    linkUrl: 'shop/donats'
  },
  {
    title: 'croissants',
    imageUrl: 'https://bi.im-g.pl/im/d9/3d/17/z24370393Q,Croissanty-wbrew-pozorom-wcale-nie-tak-trudno-przy.jpg',
    size: 'large',
    id: 5,
    linkUrl: 'shop/croissants'
  }
];


class Directory extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      sections
    }
  }

  render() {
    return (
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
  }
}

export default Directory;