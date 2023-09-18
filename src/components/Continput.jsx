import {useState} from "react";

const Continput = () => {
  const [value, setValue] = useState("Text inside");
  return (
    <>
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)} // upravlaemiy - poskolku mi vsegda mojem izmenit znacheniye etogo komponenta izmeniv ego sostoyanie
      />
    </>
  );
};


export default Continput;