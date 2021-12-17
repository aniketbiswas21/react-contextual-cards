import React from "react";

import { HC9Card } from "./HC9.styles";
import HC5Placeholder from "../../assets/images/HC5_Placeholder.svg";

const HC9 = () => {
  return (
    <HC9Card>
      <img src={HC5Placeholder} alt="placeholder" className="bg-image" />
    </HC9Card>
  );
};

export default HC9;
