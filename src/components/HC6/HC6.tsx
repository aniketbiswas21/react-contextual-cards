import React from "react";

import { HC6Card } from "./HC6.styles";
import profile from "../../assets/images/profile.svg";
import chevronRight from "../../assets/images/chevron-right.svg";

const HC6 = () => {
  return (
    <HC6Card>
      <div className="content-block">
        <img src={profile} className="card-img" alt="card-img" />
        <p className="content">Small card with arrow</p>
      </div>
      <div className="arrow-block">
        <img src={chevronRight} className="arrow" alt="arrow" />
      </div>
    </HC6Card>
  );
};

export default HC6;
