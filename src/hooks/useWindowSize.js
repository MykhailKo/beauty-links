const { useState, useEffect } = require("react");

export default function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateHeightAndWidth = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateHeightAndWidth);
    return () => {
      window.removeEventListener("resize", updateHeightAndWidth);
    };
  }, []);
  return [width, height];
}
