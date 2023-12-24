import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 300px;
  height: 60px;
  margin-top: 20px;
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  border: 2px solid black;
  border-radius: 70px;
  background-color: red;
  color: white;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
  }
`;
