import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Lightbox from 'react-images';

class Gallery extends Component {
    state = {
        lightboxIsOpen: false,
        currentImage: 0,
    };

    openLightbox = (i, e) => {
        e.preventDefault();
        this.setState({ currentImage: i, lightboxIsOpen: true });
    }

    closeLightbox = () => {
        this.setState({ currentImage: 0, lightboxIsOpen: false });
    }

    gotoPrevious = () => {
        this.setState({ currentImage: this.state.currentImage - 1 });
    }

    gotoNext = () => {
        this.setState({ currentImage: this.state.currentImage + 1 });
    }

    gotoImage = (i) => {
        this.setState({ currentImage: i });
    }

    handleClickImage = () => {
        if (this.state.currentImage === this.props.images.length - 1) return;
        this.gotoNext();
    }

    render () {
        const { images } = this.props;
        return (
            <div>
                <div className="row">
                    {images ?
                        images.map((obj, i) => (
                            <article className="6u 12u$(xsmall) work-item" key={i}>
                                <a
                                    className="image fit thumb"
                                    href={obj.src}
                                    onClick={(e) => this.openLightbox(i, e)}
                                >
                                    <img alt="thumbnail" src={obj.thumbnail} />
                                </a>

                                <h3>{obj.caption}</h3>
                                <p>{obj.description}</p>
                            </article>
                        )) : <React.Fragment />}
                </div>
                <Lightbox
                    currentImage={this.state.currentImage}
                    images={this.props.images}
                    isOpen={this.state.lightboxIsOpen}
                    onClickImage={this.handleClickImage}
                    onClickNext={this.gotoNext}
                    onClickPrev={this.gotoPrevious}
                    onClickThumbnail={this.gotoImage}
                    onClose={this.closeLightbox}
                />
            </div>
        );
    }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
    images: PropTypes.array
};

export default Gallery;