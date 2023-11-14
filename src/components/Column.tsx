import styled from "styled-components";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

const Column = (props: any) => {
  return (
    <StyledColumn>
      <h3 className="column__title">{props.column.title}</h3>
      <Droppable droppableId={props.column.id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="column__tasks-list"
          >
            {props.tasks.map((task: any, index: number) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </StyledColumn>
  );
};

const StyledColumn = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;

  .column__title {
    font-weight: 600;
    font-size: 22px;
  }

  .column__title,
  .column__tasks-list {
    padding: 8px;
  }
`;

export default Column;
