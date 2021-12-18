import styled from "styled-components";

export const HC6Card = styled.div`
  display: flex;
  width: 100%;
  min-width: 100%;
  min-height: 60px;
  height: fit-content;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 12px;
  justify-content: space-between;

  .content-block {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: fit-content;
  }

  .arrow-block {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  .card-img {
    height: 30px;
    width: 30px;
    object-fit: content;
    margin-right: 1rem;
  }

  .content {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    white-space: pre-wrap;
  }
`;
