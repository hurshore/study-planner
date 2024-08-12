const SuggestionsSkeleton = () => {
  return (
    <div className="flex flex-col animate-pulse gap-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div className="flex items-center" key={index}>
          <div key={index} className="flex-1 h-8 bg-grey-400 rounded"></div>
          <div className="w-8 h-8 ml-4 bg-grey-600 rounded cursor-pointer"></div>
        </div>
      ))}
    </div>
  );
};

export default SuggestionsSkeleton;
