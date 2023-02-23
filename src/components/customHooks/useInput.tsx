import React, { useEffect, useState } from "react";

const useInput = () => {
  let initialValue = {
    value: "",
    name: "",
  };

  const [val, setValue] = useState(initialValue);
  function onInput(e: React.ChangeEvent<HTMLInputElement>) {
    let na: string = e.target.name;
    let inputValue: string = `${e.target.value}`;
    console.log(inputValue);
    setValue({ ...val, name: na, [na]: inputValue });
    // e.target.value = inputValue;
  }

  useEffect(() => {}, []);
  return { val, onChange: onInput };
};

export default useInput;
