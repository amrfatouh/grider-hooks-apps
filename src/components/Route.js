import { useEffect, useState } from "react";

let dummy = 1;
function Route({ path, children }) {
  const [, setDummy] = useState(1);

  useEffect(() => {
    const rerenderRoute = () => {
      setDummy((dummy++ + 1) % 5);
    };
    window.addEventListener("popstate", rerenderRoute);
    return () => {
      window.removeEventListener("popstate", rerenderRoute);
    };
  }, []);
  return path === window.location.pathname ? children : null;
}

export default Route;
