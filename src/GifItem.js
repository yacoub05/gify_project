import React from 'react';

const GifItem = (image) => {
  return (
      <div className='gif_item'>
      <img src={image.gif.images.downsized.url} alt="no found" />
      </div>
  )
};

export default GifItem;
