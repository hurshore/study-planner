type Props = {
  numLines: number;
};

const PulsingText = ({ numLines }: Props) => {
  return (
    <div className="flex flex-col animate-pulse gap-3">
      {Array.from({ length: numLines }).map((_, index) => (
        <div key={index} className="w-full h-3 bg-grey-400 rounded"></div>
      ))}
    </div>
  );
};

export default PulsingText;
