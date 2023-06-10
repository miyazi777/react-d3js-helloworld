import { useRef, useEffect } from "react";
import * as d3 from "d3";

function App() {
  const ref = useRef();

  useEffect(() => {
    const svgElement = d3.select(ref.current);
    // cx:円の中心のx座標 cy:円の中心のy座標 r:円の半径
    svgElement.append("circle").attr("cx", 120).attr("cy", 70).attr("r", 60);
  }, []);

  return <svg ref={ref} />;
}

export default App;
