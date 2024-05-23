type Props = {
  className: string;
};

const GoalIcon = ({ className }: Props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icon/Placeholder-filled">
        <path
          className={className}
          id="Vector"
          d="M17.4582 12.1251L12.1332 17.4501C10.9665 18.6168 9.04983 18.6168 7.8748 17.4501L2.5498 12.1251C1.38314 10.9584 1.38314 9.04175 2.5498 7.86675L7.8748 2.54175C9.0415 1.37508 10.9582 1.37508 12.1332 2.54175L17.4582 7.86675C18.6248 9.04175 18.6248 10.9584 17.4582 12.1251Z"
          fill="none"
        />
      </g>
    </svg>
  );
};

export default GoalIcon;
