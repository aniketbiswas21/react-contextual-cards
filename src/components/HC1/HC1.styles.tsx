import styled from "styled-components";
import { HC6Card } from "../HC6/HC6.styles";

export const HC1Card = styled(HC6Card)`
  background: #fbaf03;

  .card-img {
    height: 35px;
    width: 35px;
    object-fit: contain;
  }

  .heading {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    margin: 0;
  }

  .sub-heading {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin: 0;
    color: rgba(27, 27, 30, 0.725524);
  }

  .title-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
