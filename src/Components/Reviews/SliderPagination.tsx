import React from 'react';

type PaginationProps = {
  handleClick: (index: number) => void,
  offset: number,
  length: number,
};

const SliderPagination: React.FC<PaginationProps> = ({ handleClick, offset, length }) => {
  if (length < 1) {
    return null;
  }

  return (
    <div className="slider-bullets">
      {Array.from({ length }, () => null)
        .map((_, index) => (
          <button
            type="button"
            aria-label="bullet"
            className={index === offset ? 'bullet active' : 'bullet'}
            onClick={() => handleClick(index)}
            key={Math.random()}
          />
        ))}
    </div>
  );
};

export default SliderPagination;
