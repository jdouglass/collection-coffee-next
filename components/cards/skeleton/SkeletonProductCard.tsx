export interface ISkeletonProductCard {}

const SkeletonProductCard: React.FC<ISkeletonProductCard> = () => {
  return (
    <div className="w-80 h-[490px] bg-white animate-pulse">
      <div className="flex justify-center">
        <div className="h-[260px] w-[300px] bg-gray-200 rounded-lg" />
      </div>
      <div className="m-4">
        <div className="mb-2 flex justify-between mt-5">
          <div className="text-sm align-middle h-4 w-40 bg-gray-200 rounded-lg" />
          <div className="align middle text-sm h-4 w-20 bg-gray-200 rounded-lg" />
        </div>
        <div className="mb-2 mt-4 h-5 w-48 bg-gray-200 rounded-lg" />
        <div className="text-sm mb-2 mt-4 w-32 h-4 bg-gray-100 rounded-lg" />
        <div className="text-sm mb-2 mt-2 w-20 h-4 bg-gray-100 rounded-lg" />
        <div className="text-sm mb-2 mt-2 w-44 h-4 bg-gray-100 rounded-lg" />
      </div>
    </div>
  );
};

export default SkeletonProductCard;
