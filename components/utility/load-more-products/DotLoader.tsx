export interface IDotLoader {}

const DotLoader: React.FC<IDotLoader> = () => {
  return (
    <div className="bg-white flex space-x-2 p-5 justify-center items-center">
      <div className="bg-blue-300 p-2 w-4 h-4 rounded-full animate-bounce" />
      <div className="bg-blue-300 p-2 w-4 h-4 rounded-full animate-bounce" />
      <div className="bg-blue-300 p-2 w-4 h-4 rounded-full animate-bounce" />
    </div>
  );
};

export default DotLoader;
