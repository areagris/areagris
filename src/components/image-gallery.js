import React, { Component } from 'react';

import Image from './image';

class ImageGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showIndex: 0,
    }
  }

  componentDidMount() {
    if (this.props.item.isGallery) {
      let quantity  = this.props.item.gallery.length;

      setInterval(() => {
        if (this.state.showIndex === (quantity - 1)) {
          this.setState({ showIndex: 0 });
        } else {
          this.setState({ showIndex: this.state.showIndex + 1 });
        }
      }, 2000)
    }
  }

  render = () => (
    <div className={`dt mr4 img-size--${this.props.item.size}`}>
      {this.props.item.isGallery ? (
        this.props.item.gallery.map((item, itemKey) => (
          <div key={itemKey} className={this.state.showIndex === itemKey ? 'db' : 'dn'}>
            <Image filename={item} />
          </div>
        ))
      ) : (
        <Image filename={this.props.item.imageName} />
      )}
    </div>
  );
}


export default ImageGallery;
