import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
function Image({ src, alt, className, fallBack: customFallBack = images.noImage, ...porps }, ref) {
    const [fallBack, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(customFallBack);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...porps}
            onError={handleError}
        />
    );
}
forwardRef.PropTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallBack: PropTypes.string,
};

export default forwardRef(Image);
