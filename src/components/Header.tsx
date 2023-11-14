import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <p>Manage App</p>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  color: #fff;
  font-bold;
  font-size: 30px;
  background-color: #00000040;
  border-bottom: 1px solid silver;
  padding: 10px 20px;
  width: 100%;
  position: fixed;

  @media (max-width: 1120px) {
  background-color: #111111fc;  
  }
`;

export default Header;
