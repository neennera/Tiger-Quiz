interface Props {
  index: number;
}

const ProgessBar = (props: Props) => {
  return (
    <div>
      <div className="w-[100%] flex flex-row mb-3">
        <p
          className="relative text-3xl t-0  transition-width duration-500 ease-in-out"
          style={{ left: `${(props.index * 97) / 3}%` }}
        >
          🐯
        </p>
        <p className="relative text-3xl left-[93%] t-0">🏃</p>
      </div>

      <div className="absolute w-[80%] z-0 bg-white h-3"></div>
      <div
        className="absolute z-0 bg-dark h-3 transition-width duration-500 ease-in-out"
        style={{ width: `${(props.index * 80) / 3}%` }}
      ></div>
    </div>
  );
};

export default ProgessBar;
