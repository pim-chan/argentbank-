import React from 'react';

const FeatureItem = ({title, image, text}) => {
    return (
            <article className="feature-item">
                <img className='feature-item__icon' src={image} />
                <h3 className='feature-item__title'>{title}</h3>
                <p className='feature-item__text'>{text}</p>
            </article>
    );
};

export default FeatureItem;