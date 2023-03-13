import React, { useState, useRef } from 'react';

const ScrollableArea = ({ className, children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const contentRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX); 
  };

  const handleMouseMove = (e) => {
    if (!isDragging) {
      return;
    }
    
    const deltaX = e.pageX - startX;

    contentRef.current.scrollLeft -= deltaX;
  };

  const handleOnMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleOnMouseLeave}
      onMouseUp={handleMouseUp}
      ref={contentRef}
      className={className}
    >
      {children}
    </div>
  );
};

export default ScrollableArea;
