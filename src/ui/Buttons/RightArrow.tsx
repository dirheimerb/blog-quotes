'use client';
import React from 'react';

export type RightButtonProps = {
  onClick: () => void;
  classValue?: string;
};
const RightButton = React.forwardRef<HTMLButtonElement, RightButtonProps>(
  function RightButton({ onClick, classValue }: RightButtonProps, ref) {
    return (
      <button
        type="button"
        className={classValue}
        onClick={onClick}
        ref={ref}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          width={16}
          height={20}
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    );
  },
);

export default RightButton;
