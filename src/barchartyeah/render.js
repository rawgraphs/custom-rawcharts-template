import * as d3 from 'd3'
// import { legend, dateFormats } from '@rawgraphs/rawgraphs-core'
// import * as d3Gridding from 'd3-gridding'
// import '../d3-styles.js'

export function render(
  svgNode,
  data,
  visualOptions,
  mapping,
  originalData,
  styles
) {
  svgNode.innerHTML = `
      <style>
      .small { font: italic 13px sans-serif; }
      .heavy { font: bold 30px sans-serif; }

      /* Note that the color of the text is set with the    *
      * fill property, the color property is for HTML only */
      .Rrrrr { font: italic 40px serif; fill: red; }
    </style>

    <text x="20" y="35" class="small">Killing</text>
    <text x="60" y="35" class="heavy">shit</text>
    <text x="55" y="55" class="small">while</text>
    <text x="110" y="55" class="Rrrrr">Render!</text>
  `
}
