type Props = {
  stroke?: string;
};

const CloseIcon = ({ stroke = 'stroke-error-400' }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={stroke}
    >
      <path
        d="M17 7L7 17M7 7L17 17"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
