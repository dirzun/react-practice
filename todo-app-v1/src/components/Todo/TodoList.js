import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};

// const [edit, setEdit] = useState({
//   id:null,
//   value:''
// });

function TodoList(props) {
  console.log(props);
  const item = props.todos.map((todo, index) => (
    <TodoItem
      todo={todo}
      key={todo.id}
      index={index}
      onChange={props.onToggle}
    />
  ));
  return <ul style={styles.ul}>{item}</ul>;
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;
