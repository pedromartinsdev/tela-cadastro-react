import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 60px;
  background-color: #151515;
  
  img {
    height: 2rem;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  a {
    background-color: #565656;
    color: #FFFFFF;
    height: 1.5rem;
    width: 9rem;
    font-family: "Open Sans";
    text-decoration: none;
    text-align: center;
    margin-right: 2rem;
    border-radius: 11px;
  }

  a.first-link{
    background-color: #151515;
  }
`;
