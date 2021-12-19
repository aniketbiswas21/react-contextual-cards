import React from "react";

import { IndicatorContainer } from "./Indicator.styles";
import loadingGif from "../../assets/images/Loading.gif";
import errorGif from "../../assets/images/error.gif";

interface IndicatorProps {
  status: "idle" | "error";
}

const Indicator: React.FC<IndicatorProps> = ({ status }) => {
  return (
    <IndicatorContainer>
      <img
        src={status === "idle" ? loadingGif : errorGif}
        alt={status === "idle" ? "loading" : "error"}
      />
    </IndicatorContainer>
  );
};

export default Indicator;
