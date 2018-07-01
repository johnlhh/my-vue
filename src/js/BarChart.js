import {Bar} from 'vue-chartjs'

export default {
  extends: Bar,
  data () {
    return {
      datacollection: {
        labels: ['January', 'February', 'March', 'April','May'],
        datasets: [
          {
            label: 'GitHub Commits1',
            backgroundColor: '#f87979',
            data: [40, 20, 1, 39,21]
          },
          {
            label: 'GitHub Commits2',
            backgroundColor: '#f82969',
            data: [40, 20, 12, 39,21]
          }
        ]
      }

    }
  },
  mounted () {
    this.renderChart(this.datacollection, {responsive: false, maintainAspectRatio: true})
  }
}
