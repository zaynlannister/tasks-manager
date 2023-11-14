import React from "react";
import Column from "./components/Column.js";
import data from "./data.js";
import { DragDropContext } from "react-beautiful-dnd";

const App = () => {
  const [state, setState] = React.useState(data);

  const onDragEnd = (result: any) => {
    const { destination, draggableId, source } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = state.columns[source.droppableId];
    const newTasksIds = Array.from(column.tasksIds);

    newTasksIds.splice(source.index, 1);
    newTasksIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      tasksIds: newTasksIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newColumn.id]: newColumn,
      },
    };

    setState(newState);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {state.columnOrder.map((columnId: any) => {
        const column = state.columns[columnId];
        const tasks = column.tasksIds.map((taskId: any) => state.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
};

export default App;
