import React from "react";
import { MDBBadge } from "mdbreact";

const BadgePage = (props: any) => {
  return (
    <MDBBadge
      name={props.name}
      color={props.color ? props.color : "default"}
      onClick={() => props.BtnClick(props.name)}
    >
      {props.name}
    </MDBBadge>
  );
};

export default BadgePage;
