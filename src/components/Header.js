import React from "react";
import Link from "./Link";

function Header() {
  return (
    <div className="ui center aligned segment">
      <div className="ui horizontal bulleted link list ">
        <Link className="item" href="/#/">
          Accordion
        </Link>
        <Link className="item" href="/#/search">
          Search
        </Link>
        <Link className="item" href="/#/colors">
          Colors
        </Link>
        <Link className="item" href="/#/translation">
          Translation
        </Link>
      </div>
    </div>
  );
}

export default Header;
