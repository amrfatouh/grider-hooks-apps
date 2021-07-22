import React, { useState } from "react";

export default function Accordion({ items }) {
  const [activeItem, setActiveItem] = useState(null);

  const onTitleClick = (item) => {
    if (!activeItem || item.title !== activeItem.title) setActiveItem(item);
    else setActiveItem(null);
  };

  const accordionEntries = items.map((item) => {
    const active = determineActive(item, activeItem);
    return (
      <div className="ui segment" key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(item)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </div>
    );
  });

  return <div className="ui accordion segment">{accordionEntries}</div>;
}

// compares between an item & active item
// if the title of item equals the title of active item it returns "active"
// if active item is not defined or if item and active item are different, it returns empty string
const determineActive = (item, activeItem) => {
  let active;
  if (!activeItem) active = "";
  else if (item.title === activeItem.title) active = "active";
  else active = "";
  return active;
};
