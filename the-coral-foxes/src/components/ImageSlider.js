import React, { useState } from 'react';

const ImageSlider = ({ oldPic, newPic }) => {
  const [ratio, setRatio] = useState(50);
  const [mousePos, setMousePos] = useState();

  const onHover = (ev) => {
    const currentTargetRect = ev.currentTarget.getBoundingClientRect();
    const event_offset = ev.pageX - currentTargetRect.left;
    setRatio(((event_offset / currentTargetRect.width) * 100).toFixed(0));
  };

  return (
    <div style={{ height: '100%' }}>
      <img
        onMouseMove={onHover}
        style={{
          position: 'absolute',
          left: '15%',
          top: '100px',
          width: '70%',
          height: '400px',
        }}
        src={process.env.PUBLIC_URL + oldPic}
        alt='old'
      />
      <img
        style={{
          position: 'absolute',
          left: '15%',
          top: '100px',
          width: '70%',
          height: '400px',
          objectFit: 'cover',
          clipPath: `polygon(0 0 , ${ratio}% 0, ${ratio}% 100%, 0 100%)`,
          pointerEvents: 'none',
        }}
        src={process.env.PUBLIC_URL + oldPic}
        alt='old'
      />
      <div
        style={{
          backgroundColor: 'blue',
          position: 'absolute',
          width: '2px',
          height: '400px',
          top: '100px',
          pointerEvents: 'none',
          left:
            (mousePos && mousePos - 1) || `calc(${15 + ratio * 0.7}% - 1px)`,
        }}
      ></div>
      <img
        style={{
          position: 'absolute',
          left: '15%',
          top: '100px',
          width: '70%',
          height: '400px',
          objectFit: 'cover',
          clipPath: `polygon(${ratio}% 0 , 100% 0, 100% 100%, ${ratio}% 100%)`,
          pointerEvents: 'none',
        }}
        src={process.env.PUBLIC_URL + newPic}
        alt='new'
      />
    </div>
  );
};

export default ImageSlider;
