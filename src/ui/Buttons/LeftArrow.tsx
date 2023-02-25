import React from 'react';

export interface LeftButtonProps {
  onClick: () => void;
  classValue?: string;
}

const LeftButton = React.forwardRef<HTMLButtonElement, LeftButtonProps>(
  function LeftButton({ onClick, classValue }: LeftButtonProps, ref) {
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
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </button>
    );
  },
);

export default LeftButton;
