import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import 'photoswipe/style.css';

export default function SimpleGallery(props) {
    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: '#' + props.galleryID,
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

        return () => {
            lightbox.destroy();
            lightbox = null;
        };
    }, []);

    return (
        <div className="pswp-gallery" id={props.galleryID}>
        {props.images.map((image, index) => (
            <a
            href={image.src}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            key={props.galleryID + '-' + index}
            target="_blank"
            rel="noreferrer"
            >
            <GatsbyImage image={getImage(image)} alt="" />
            </a>
        ))}
        </div>
    );
}
