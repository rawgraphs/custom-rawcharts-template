import * as d3 from 'd3'
import '../d3-styles.js'

export function render(
  svgNode,
  data,
  visualOptions,
  mapping,
  originalData,
  styles
) {
  d3.select(svgNode)
    .selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .attr('fill', visualOptions.color)
    .attr('x', (_, i) => 35 + i * 10)
    .attr('y', (_, i) => 35 + i * 25)
    .text((row) => row.name)
    .styles(styles.coolText)
}
