import Column from "./components/Column.js";
import data from "./data.js";
import { DragDropContext } from "react-beautiful-dnd";

const App = () => {
  const state = data;
  const onDragEnd = (result: any) => {
    console.log(result);
  };
  return (
    <DragDropContext onDragEnd={(event: any) => onDragEnd(event)}>
      {state.columnOrder.map((columnId: any) => {
        const column = state.columns[columnId];
        const tasks = column.tasksIds.map((taskId: any) => state.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
};

export default App;
