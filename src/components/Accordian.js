import React, { useState } from "react";

const Accordian = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const ontitleClicked = (index) => {
    setActiveIndex(index);
  };
  const renderedItems = items.map((item, index) => {
    const act = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <br></br>
        <div className={`title ${act}`} onClick={() => ontitleClicked(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>

        <div className={`content ${act}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordian">{renderedItems}</div>;
};

export default Accordian;
