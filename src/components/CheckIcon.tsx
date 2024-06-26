type Props = {
  stroke?: string;
};

const CheckIcon = ({ stroke = 'stroke-success-400' }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="13"
      viewBox="0 0 18 13"
      fill="none"
      className={stroke}
    >
      <path
        d="M17 1L6 12L1 7"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CheckIcon;
