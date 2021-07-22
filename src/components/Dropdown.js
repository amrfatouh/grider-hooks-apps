import React, { useEffect, useRef, useState } from "react";

function Dropdown({ label, options, selected, setSelected }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const closeDropdown = (e) => {
      if (ref.current?.contains(e.target)) return;
      setOpen(false);
    };
    document.body.addEventListener("click", closeDropdown);
    return () => {
      document.body.removeEventListener("click", closeDropdown);
    };
  }, []);

  const active = open ? "active" : "";
  const renderedColors = options.map((option) => {
    if (option.value === selected.value) return null;
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => setSelected(option)}>
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref}>
      <div>{label}</div>
      <div className="ui compact menu" onClick={() => setOpen(!open)}>
        <div className={`ui simple dropdown item ${active}`}>
          {selected.label}
          <i className="dropdown icon"></i>
          <div className="menu">{renderedColors}</div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
