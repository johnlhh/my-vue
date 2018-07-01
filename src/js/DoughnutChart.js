import {Doughnut} from 'vue-chartjs'

export default {
  extends: Doughnut,
  data () {
    return {
      datacollection: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [
          {
            label: 'GitHub Commits2',
            backgroundColor: ['#637b85', '#2c9c69', '#dbba34', '#c62f29'],
            data: [30,40,20,10]
          }
        ]
      }

    }
  },
  mounted () {
    this.renderChart(this.datacollection, {responsive: false, maintainAspectRatio: true})
  }
}
