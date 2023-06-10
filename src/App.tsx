import { useRef, useEffect } from "react";
import * as d3 from "d3";

function App() {
  const ref = useRef();

  useEffect(() => {
    const svgElement = d3.select(ref.current);
    svgElement
      // cx:円の中心のx座標 cy:円の中心のy座標 r:円の半径
      .append("circle")
      .attr("cx", 120)
      .attr("cy", 70)
      .attr("r", 60)
      // fill:塗りつぶしの色
      .attr("fill", "rgba(0, 50, 250, 1.0)")
      // mouseが重なった時の処理
      .on("mouseover", function () {
        d3.select(this).attr("opacity", "0.3");
      })
      // mouseが外れた時の処理
      .on("mouseout", function () {
        d3.select(this).attr("opacity", "1.0");
      });
  }, []);

  return <svg ref={ref} />;
}

export default App;
