import styled from "styled-components";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

interface TaskList {
  $isDraggingOver: boolean;
}

const Column = (props: any) => {
  return (
    <StyledColumn>
      <h3 className="column__title">{props.column.title}</h3>
      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => (
          <StyledList
            ref={provided.innerRef}
            {...provided.droppableProps}
            $isDraggingOver={snapshot.isDraggingOver}
          >
            {props.tasks.map((task: any, index: number) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </StyledList>
        )}
      </Droppable>
    </StyledColumn>
  );
};

const StyledColumn = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 8px;
  width: 300px;
  min-width: 300px;
  background-color: #fff;

  display: flex;
  flex-direction: column;

  .column__title {
    font-weight: 600;
    font-size: 22px;
  }

  .column__title {
    padding: 8px;
  }

  @media (max-width: 1120px) {
    width: 100%;
    margin: 0;
  }
`;

const StyledList = styled.div<TaskList>`
  transition: 160ms all;
  padding: 8px;
  background-color: ${(props) =>
    props.$isDraggingOver ? "#bee0ee" : "#e6e6e659"};
  flex-grow: 1;
  min-height: 100px;
  border-radius: 7px;
`;

export default Column;
