import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import type { ChartData, ChartOptions} from 'chart.js';



import { Bar } from 'react-chartjs-2';
import Card from '../glopal/Card';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
function BarChart(){

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        },
      } as ChartOptions<'bar'>;
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Articles',
            data: labels.map(() => { return Math.random() * 1000 + 500 }),
            backgroundColor: 'rgba(255, 99, 132, 1)',
          },
          {
            label: 'Users',
            data: labels.map(() => { return Math.random() * 1000 + 500 }),
            backgroundColor: 'rgba(53, 162, 235, 1)',
          },
        ],
      } as ChartData<'bar'>;

    return(
      <Card >
        <Bar options={options} data={data} />
      </Card>
    )
}


export default BarChart