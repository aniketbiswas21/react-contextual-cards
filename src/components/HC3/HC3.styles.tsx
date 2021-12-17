import styled from "styled-components";

interface ActionProps {
  visibility: boolean;
}

export const HC3CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: hidden;
  background-color: #ffffff;
  border-radius: 12px;
`;

export const HC3Card = styled.div`
  display: flex;
  width: 100%;
  min-width: 100%;
  flex-direction: column;
  padding: 2rem;
  height: fit-content;
  background-color: #454aa6;
  color: #fff;
  border-radius: 12px;

  .logo {
    height: 81.2px;
    width: 91.73px;
    object-fit: contain;
  }

  .heading-box {
    width: 100%;
    margin-bottom: 1rem;
  }

  .subtitle-box {
    width: 100%;
    margin-bottom: 1rem;
  }

  .heading {
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    word-wrap: break-word;
    margin-bottom: 0;
  }

  .subtitle {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
  }

  .action-btn {
    background-color: #000;
    border-radius: 6px;
    width: 128px;
    color: #fff;
    border: none;
    padding: 0.8rem 1rem;
  }
`;

export const ActionBar = styled.div<ActionProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.visibility ? "100%" : "0px")};
  transition: all 0.3s ease-in-out;
  padding: ${(props) => (props.visibility ? "1rem" : "0")};
`;

export const ActionButtonContainer = styled.button`
  background-color: #f7f6f3;
  border: none;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;

  :first-child {
    margin-bottom: 1rem;
  }

  .button-text {
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    margin: 0;
    white-space: nowrap;
  }
`;