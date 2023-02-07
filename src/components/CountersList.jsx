import { useState } from "react";
import Counter from "./Counter";
const CountersList = () => {
  const initialCounters = [
    { id: "Thing", value: 0, name: "Ненужная вещь" },
    { id: "Spoon", value: 0, name: "Ложка" },
    { id: "Fork", value: 0, name: "Вилка" },
    { id: "Plate", value: 0, name: "Тарелка" },
    { id: "Set-mini", value: 2, name: "Набор минималиста" },
  ];
  const [counters, setCounters] = useState(initialCounters);

  const handlDelete = (id) => {
    setCounters((prevState) => prevState.filter((count) => count.id !== id));
  };

  const handleUpdate = () => {
    setCounters(initialCounters);
  };

  const handleIncrement = (id) => {
    const newCounters = counters.filter((count) => ({
      ...count,
      value: count.id === id ? count.value++ : count.value,
    }));
    setCounters(newCounters);
  };

  const handleDecrement = (id) => {
    const newCounters = counters.filter((count) => ({
      ...count,
      value: count.id === id ? count.value-- : count.value,
    }));
    setCounters(newCounters);
  };

  return (
    <>
      <h1>Counters list</h1>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handlDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm mt-2" onClick={handleUpdate}>
        update
      </button>
    </>
  );
};

export default CountersList;
