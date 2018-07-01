import {Radar} from 'vue-chartjs'

export default {
  extends: Radar,
  data () {
    return {
      datacollection: {
        labels: ['January', 'February', 'March', 'April','May'],
        datasets: [

          {
            label: 'GitHub Commits1',
            backgroundColor: '#637b85',
            data: [40, 20, 30, 30,50]
          },
          {
            label: 'GitHub Commits2',
            data: [30, 40, 40, 50,40]
          }
        ]
      }

    }
  },
  mounted () {
    this.renderChart(this.datacollection, {responsive: false, maintainAspectRatio: true})
  }
}
