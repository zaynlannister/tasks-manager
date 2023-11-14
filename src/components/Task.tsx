import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Task = (props: any) => {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <StyledTask
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          $isDragging={snapshot.isDragging}
        >
          {props.task.content}
        </StyledTask>
      )}
    </Draggable>
  );
};

const StyledTask = styled.div<{ $isDragging: boolean }>`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 2px;
  background-color: ${(props) => (props.$isDragging ? "lightgreen" : "white")};
`;

export default Task;
