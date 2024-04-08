import { css } from "uebersicht";

export const refreshFrequency = false;

export const render = (input) => {
  var p5 = require("p5/lib/p5");
  var script = require("./lib/script");
  // replace the p5_ubersicht_template with the name of your widget folder name
  const style = css`
    @import url("./p5_ubersicht_template/lib/style.css");
  `;
  const sketchEl = document.getElementById("sketch");
  const sketchInstance = new p5(script.sketch, "sketch");

  return (
    <div className={style}>
      <div id="sketch"></div>
    </div>
  );
};
