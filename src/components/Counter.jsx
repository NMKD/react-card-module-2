const Counter = ({ id, value, name, onDelete, onIncrement, onDecrement }) => {
  // const [count, setCount] = useState(value);

  const formatCount = () => {
    return value === 0 ? "empty" : value;
  };

  const getBageClasses = () => {
    let classes = "badge m-2 ";
    return (classes += value === 0 ? "bg-warning" : "bg-primary");
  };

  // const handleIncrement = () => {
  //   setCount((prevState) => prevState + 1);
  // };

  // const handleDecrement = () => {
  //   setCount((prevState) =>
  //     prevState === 0 ? (prevState = 0) : prevState - 1
  //   );
  // };

  return (
    <div>
      <span>{name}</span>
      <span className={getBageClasses()}>{formatCount()}</span>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => onIncrement(id)}
      >
        +
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => onDecrement(id)}
      >
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => onDelete(id)}
      >
        delete
      </button>
    </div>
  );
};

export default Counter;
