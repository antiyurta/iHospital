import React from "react";
import Order from "../Order/Order";

export default function Ocs({ handleClick }) {
  const categories = [
    {
      //omnoh jor
      name: "RecentRecipe",
    },
    {
      //set order
      name: "SetOrder",
    },
    {
      //em
      name: "Medicine",
    },
    {
      //shinejilgee
      name: "Examination",
    },
    {
      //onshilgoo
      name: "Xray",
    },
    {
      //emchilgee
      name: "Treatment",
    },
    {
      //hagalgaa mes
      name: "Surgery",
    },
    {
      //duran
      name: "Endo",
    },
    {
      //bagts
      name: 'package'
    }
  ];

  return (
    <div className="items-center">
      <Order isDoctor={true} categories={categories} save={handleClick} />
    </div>
  );
}
