<template>
  <div class="p-1 mx-auto sm:p-3 lg:p-8">
    <div class="w-6/12">
      <Bar
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
      />
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs/legacy'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart',
    },
    datasetIdKey: {
      type: String,
      default: 'label',
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: '',
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      chartData: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        datasets: [
          {
            data: [40, 20, 12, 13, 14, 15, 16, 17, 17, 17, 17, 17],
            backgroundColor: [
              '#f87979',
              'blue',
              'green',
              'yellow',
              'red',
              'purple',
              'orange',
            ],
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    }
  },
}
</script>
