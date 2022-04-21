import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import EditableTree from "./editable-tree";

const data = [
  {
    productCatagoryId: "1468461019837612033",
    generalKey: "Portable Power Stations",
    name: "Portable Power Stations",
    pid: "0",
    parent: true,
    hasParent: true,
    sort: 0,
    accessory: false,
    subs: [
      {
        productCatagoryId: "1468461339749761025",
        generalKey: "RIVER Series",
        name: "RIVER Series",
        pid: "1468461019837612033",
        parent: false,
        hasParent: false,
        sort: 0,
        accessory: false,
      },
      {
        productCatagoryId: "1468461504103563266",
        generalKey: "DELTA Series",
        name: "DELTA Series",
        pid: "1468461019837612033",
        parent: false,
        hasParent: false,
        sort: 0,
        accessory: false,
      },
    ],
  },
  {
    productCatagoryId: "1468461916013576194",
    generalKey: "Solar Panels",
    name: "Solar Panels",
    pid: "0",
    parent: false,
    hasParent: false,
    sort: 0,
    accessory: false,
  },
  {
    productCatagoryId: "1468462465052164098",
    generalKey: "Smart Devices",
    name: "Smart Devices",
    pid: "0",
    parent: true,
    hasParent: true,
    sort: 0,
    accessory: false,
    subs: [
      {
        productCatagoryId: "1468463971339976706",
        generalKey: "Smart Home Panel",
        name: "Smart Home Panel",
        pid: "1468462465052164098",
        parent: false,
        hasParent: false,
        sort: 0,
        accessory: false,
      },
      {
        productCatagoryId: "1468464717938671617",
        generalKey: "Smart Generator",
        name: "Smart Generator",
        pid: "1468462465052164098",
        parent: false,
        hasParent: false,
        sort: 0,
        accessory: false,
      },
      {
        productCatagoryId: "1468464952693866498",
        generalKey: "Solar Tracker",
        name: "Solar Tracker",
        pid: "1468462465052164098",
        parent: false,
        hasParent: false,
        sort: 0,
        accessory: false,
      },
    ],
  },
  {
    productCatagoryId: "1468462698259660801",
    generalKey: "Accessories",
    name: "Accessories",
    pid: "0",
    parent: false,
    hasParent: false,
    sort: 0,
    accessory: true,
  },
];

function App() {
  return (
    <div className="App">
      <EditableTree treeData={data}></EditableTree>
    </div>
  );
}

export default App;
