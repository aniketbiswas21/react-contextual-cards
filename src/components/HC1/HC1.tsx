import React from "react";

import { HC1Card } from "./HC1.styles";
import profile from "../../assets/images/HC1_Placeholder.svg";

const HC1 = () => {
  return (
    <HC1Card>
      <div className="content-block">
        <img src={profile} className="card-img" alt="card-img" />
        <div className="title-block">
          <p className="heading">Small display card</p>
          <p className="sub-heading">Arya Stark</p>
        </div>
      </div>
    </HC1Card>
  );
};

export default HC1;
