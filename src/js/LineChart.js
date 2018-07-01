import { Line } from 'vue-chartjs'
//学习vue-chartjs  安装依赖 npm install: npm install vue-chartjs chart.js --save
// 网站https://vue-chartjs.org/#/home
export default {
  extends: Line,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
