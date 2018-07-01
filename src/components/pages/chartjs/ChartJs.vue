<template>
  <div>
    <line-chart :data="chartData" :options="{responsive: false, maintainAspectRatio: false}"
                :width="400"
                :height="400"/>

    <bar-chart :width="800" :height="400" />

    <pie-chart />

    <doughnut-chart />

    <radar-chart />
  </div>

</template>



<script>
  import LineChart from '../../../js/LineChart'
  import BarChart from '../../../js/BarChart'
  import PieChart from '../../../js/PieChart'
  import DoughnutChart from '../../../js/DoughnutChart'
  import RadarChart from '../../../js/RadarChart'
  export default {
    components: { LineChart,BarChart,PieChart,DoughnutChart,RadarChart },

    data() {
      return {
        chartData: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: 'GitHub Commits',
              backgroundColor: '#f87979',
              data: [40, 20, 12, 39, 40, 40, 39, 80, 40, 20, 12, 11]
            }
          ]
        }
      }
    },
  }
</script>
