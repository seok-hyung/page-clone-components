import { ChartData, ChartOptions } from 'chart.js'

export const getChartData = (heightData: number[]): ChartData<'bar'> => ({
  labels: ['150cm 이상', '160cm 이상', '170cm 이상', '180cm 이상', '190cm 이상'],
  datasets: [
    {
      label: '키 분포',
      data: heightData,
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
})

export const chartOptions: ChartOptions<'bar'> = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        font: {
          size: 18,
        },
      },
      title: {
        display: true,
        text: '키 범위',
        font: {
          size: 18,
        },
      },
    },
    y: {
      ticks: {
        font: {
          size: 18,
        },
      },
      title: {
        display: true,
        text: '인원 수 (명)',
        font: {
          size: 18,
        },
      },
    },
  },
  plugins: {
    tooltip: {
      titleFont: {
        size: 12,
      },
      bodyFont: {
        size: 12,
      },
      padding: 10,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      boxWidth: 8,
      boxHeight: 8,
    },
    legend: {
      position: 'top' as const,
      labels: {
        font: {
          size: 20,
        },
      },
    },
    title: {
      display: true,
      text: '사용자 키 분포',
      font: {
        size: 30,
      },
    },
  },
}
