import React, { useState } from "react";
import Accordian from "./components/Accordian";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Router from "./components/Router";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content:
      "React ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptas aut ipsum, quas aliquid qui rerum mollitia in velit cum error ab quasi, nam deserunt ratione officia, quibusdam fugiat voluptates?",
  },
  {
    title: "What is Angular?",
    content:
      "Angular ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptas aut ipsum, quas aliquid qui rerum mollitia in velit cum error ab quasi, nam deserunt ratione officia, quibusdam fugiat voluptates?",
  },
  {
    title: "What is Vue?",
    content:
      "Vue ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptas aut ipsum, quas aliquid qui rerum mollitia in velit cum error ab quasi, nam deserunt ratione officia, quibusdam fugiat voluptates?",
  },
];

const options = [
  {
    label: "This is red color",
    value: "red",
  },
  {
    label: "This is green color",
    value: "green",
  },
  {
    label: "This is blue color",
    value: "reblued",
  },
];
const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowdDropdown] = useState(true);

  return (
    <div>
      {/* <Accordian items={items} /> */}
      {/* <Search /> */}
      {/* 
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null} */}
      {/* <Translate /> */}
      <Header />
      <Router path="/">
        <Accordian items={items} />
      </Router>
      <Router path="/dropdown">
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Router>
      <Router path="/translate">
        <Translate />
      </Router>
      <Router path="/list">
        <Search />
      </Router>
    </div>
  );
};

export default App;
