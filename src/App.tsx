import React from "react";
import Column from "./components/Column.js";
import data from "./data.js";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import Header from "./components/Header.js";

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

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
      const newTasksIds = Array.from(start.tasksIds);

      newTasksIds.splice(source.index, 1);
      newTasksIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
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
      return;
    }

    // moving lists

    const startTasksIds = Array.from(start.tasksIds);
    startTasksIds.splice(source.index, 1);
    const newStart = {
      ...start,
      tasksIds: startTasksIds,
    };

    const finishTasksIds = Array.from(finish.tasksIds);
    finishTasksIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      tasksIds: finishTasksIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setState(newState);
    return;
  };

  return (
    <>
      <Header />
      <DragDropContext onDragEnd={onDragEnd}>
        <Container>
          {state.columnOrder.map((columnId: any) => {
            const column = state.columns[columnId];
            const tasks = column.tasksIds.map(
              (taskId: any) => state.tasks[taskId]
            );

            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </Container>
      </DragDropContext>
    </>
  );
};

const Container = styled.div`
  display: flex;
  width: min(1120px, 100%);
  padding: 0 20px;
  margin: 0 auto;
  column-gap: 20px;
  padding-top: 100px;
`;

export default App;
