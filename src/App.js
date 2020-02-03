import React from "react";

import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="container">
      <h1>Firebase Todo List</h1>
      {/* Should I be loaded here? */}

      <TodoList />
    </div>
  );
};

export default App;
