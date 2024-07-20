import React from 'react';

type SlideNavButtons = {
  handlePrev: () => void,
  handleNext: () => void,
  isNextDisabled: boolean,
  isPrevDisabled: boolean,
  isShown: boolean,
};

const SlideNavButtons: React.FC<SlideNavButtons> = (props) => {
  const {
    handlePrev,
    handleNext,
    isNextDisabled,
    isPrevDisabled,
    isShown,
  } = props;

  if (!isShown) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        className="slider-button prev"
        aria-label="Go to previous"
        onClick={handlePrev}
        disabled={isPrevDisabled}
      />

      <button
        type="button"
        className="slider-button next"
        aria-label="Go to next"
        onClick={handleNext}
        disabled={isNextDisabled}
      />
    </>
  );
};

export default SlideNavButtons;
