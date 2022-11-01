import React, { useState } from "react";
import Order from "../Order/Order";

export default function Ocs() {
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
  ];

  return (
    <div className="items-center">
      <Order isDoctor={true} categories={categories} />
    </div>
  );
}
