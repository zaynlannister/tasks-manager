import Column from "./components/Column.js";
import data from "./data.js";

const App = () => {
  let state = data;
  return state.columnOrder.map((columnId: any) => {
    const column = state.columns[columnId];
    const tasks = column.tasksIds.map((taskId: any) => state.tasks[taskId]);

    return <Column key={column.id} column={column} tasks={tasks} />;
  });
};

export default App;
