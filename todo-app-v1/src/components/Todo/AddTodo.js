import React, { useState } from "react";
import PropTypes from "prop-types";

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

function AddTodo({ onCreate }) {
  const input = useInputValue("");

//   const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    // if (value.trim()) {
    //   onCreate(value);
    //   setValue('');
    // }

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
      //setValue('');
    }
  }

  //let inputv1 =  <input value={value} onChange={event => setValue(event.target.value)} />;
  let inputv2 = <input {...input.bind} />;
  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      {inputv2}
      <button type="submit">Add Todo</button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
