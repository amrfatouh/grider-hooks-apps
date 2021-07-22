import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

function Colors() {
  const [selectedColor, setSelectedColor] = useState(options[0]);
  return (
    <div className="ui segment">
      <div className="ui segment">
        <Dropdown
          options={options}
          label="Choose a Color:"
          selected={selectedColor}
          setSelected={setSelectedColor}
        />
      </div>
      <div className="ui segment" style={{ color: selectedColor.value }}>
        The color of this text is "{selectedColor.label}"
      </div>
    </div>
  );
}

export default Colors;
