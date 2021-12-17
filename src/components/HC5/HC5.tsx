import React from "react";

import { HC5Card } from "./HC5.styles";
import HC5Placeholder from "../../assets/images/HC5_Placeholder.svg";

const HC5 = () => {
  return (
    <HC5Card>
      <img src={HC5Placeholder} alt="placeholder" className="bg-image" />
    </HC5Card>
  );
};

export default HC5;
