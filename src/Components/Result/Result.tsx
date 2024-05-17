import ResultImage from './ResultImage';
interface ResultProps {
  result: string;
}

const Result = (ResultProps: ResultProps) => {
  return (
    <div className="absolute flex text-white flex-col space-y-3 items-center justify-center min-h-screen">
      <ResultImage result={ResultProps.result} />
    </div>
  );
};

export default Result;
