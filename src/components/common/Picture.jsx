import React from 'react';

/**
 * Renders a <picture> with a WebP source and the original-format image as
 * the universal fallback, matching the srcset/source pattern used for every
 * photo across the site.
 */
export default function Picture({ src, webp, alt = '', className = '', imgProps = {}, ...rest }) {
  return (
    <picture>
      {webp && <source srcSet={webp} type="image/webp" />}
      <img src={src} alt={alt} className={className} {...rest} {...imgProps} />
    </picture>
  );
}
