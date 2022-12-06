import styled from "styled-components";

export const FormContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  h1 {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
  }

  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    width: 388px;

    color: #ffffff;
  }

  form,
  fieldset,
  input,
  button {
    width: 275px;
  }

  fieldset {
    border: none;
    display: flex;
    align-items: center;
    margin-top: 16px;
  }

  input {
    margin-left: 16px;
    height: 32px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #3b3450;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    ::placeholder {
      color: #ffffff;
      font-family: "Open Sans";
      font-size: 18px;
    }
    color: #ffffff;
  }

  button {
    color: #ffffff;
    background: #e4105d;
    border-radius: 27px;
    border: 1px solid #e4105d;

    margin-top: 32px;
    height: 42px;

    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
  }

  .account {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #ffffff;
  }

  .account > span {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #23dd7a;
  }
`;
