import React from "react";

export default function UsuallyMedicine(props) {
  return (
    <div>
      {props.data !== "" ? (
        <div className="flex">
          <p className="">{props.data}</p>
        </div>
      ) : null}
    </div>
  );
}
