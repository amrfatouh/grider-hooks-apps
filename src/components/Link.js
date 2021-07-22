import React from "react";

function Link({ href, children, className }) {
  const onAnchorClick = (e) => {
    if (e.ctrlKey || e.metaKey) return;
    e.preventDefault();
    window.history.pushState({}, "", href);
    const popStateEvent = new PopStateEvent("popstate");
    window.dispatchEvent(popStateEvent);
  };

  return (
    <a href={href} className={className} onClick={(e) => onAnchorClick(e)}>
      {children}
    </a>
  );
}

export default Link;
