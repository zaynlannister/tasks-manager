import styled from "styled-components";

const Task = (props: any) => {
  return <StyledTask>{props.task.content}</StyledTask>;
};

const StyledTask = styled.div`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 2px;
`;

export default Task;
