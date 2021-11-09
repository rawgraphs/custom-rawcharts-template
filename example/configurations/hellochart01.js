import hellochart from 'customcharts/hellochart'
import data from '../datasets/hello.csv'

export default {
  chart: hellochart,
  data,
  dataTypes: {
    hello_column: 'string',
  },
  mapping: {
    name: { value: ['hello_column'] },
  },
  visualOptions: {
    color: 'green'
  },
}
