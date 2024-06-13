type Props = {
  className: string;
};

const GoalIcon = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10.5647 16.6308C10.7937 16.6841 10.8146 16.9839 10.5916 17.0583L9.27498 17.4916C5.96665 18.5583 4.22498 17.6666 3.14998 14.3583L2.08331 11.0666C1.01665 7.75827 1.89998 6.00827 5.20831 4.9416L5.47564 4.85307C5.87851 4.71965 6.2741 5.12502 6.16519 5.53519C6.13451 5.65074 6.10451 5.76954 6.07498 5.8916L5.25831 9.38327C4.34165 13.3083 5.68331 15.4749 9.60831 16.4083L10.5647 16.6308Z"
        className={className}
      />
      <path
        d="M14.3083 2.67493L12.9167 2.34993C10.1333 1.69159 8.47499 2.23326 7.49999 4.24993C7.24999 4.75826 7.04999 5.37493 6.88332 6.08326L6.06665 9.57493C5.24999 13.0583 6.32499 14.7749 9.79999 15.5999L11.2 15.9333C11.6833 16.0499 12.1333 16.1249 12.55 16.1583C15.15 16.4083 16.5333 15.1916 17.2333 12.1833L18.05 8.69992C18.8667 5.21659 17.8 3.49159 14.3083 2.67493ZM12.7417 11.1083C12.6667 11.3916 12.4167 11.5749 12.1333 11.5749C12.0833 11.5749 12.0333 11.5666 11.975 11.5583L9.54999 10.9416C9.21665 10.8583 9.01665 10.5166 9.09999 10.1833C9.18332 9.84993 9.52499 9.64993 9.85832 9.73326L12.2833 10.3499C12.625 10.4333 12.825 10.7749 12.7417 11.1083ZM15.1833 8.29159C15.1083 8.57492 14.8583 8.75826 14.575 8.75826C14.525 8.75826 14.475 8.74993 14.4167 8.74159L10.375 7.71659C10.0417 7.63326 9.84165 7.29159 9.92499 6.95826C10.0083 6.62493 10.35 6.42493 10.6833 6.50826L14.725 7.53326C15.0667 7.60826 15.2667 7.94992 15.1833 8.29159Z"
        className={className}
      />
    </svg>
  );
};

export default GoalIcon;
