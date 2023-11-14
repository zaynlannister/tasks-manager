import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Task = (props: any) => {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided) => (
        <StyledTask
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          {props.task.content}
        </StyledTask>
      )}
    </Draggable>
  );
};

const StyledTask = styled.div`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 2px;
  background-color: white;
`;

export default Task;
