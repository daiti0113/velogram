import { Chart, ChartConfiguration } from 'chart.js/auto';
import { useEffect, useRef, useState } from 'react';

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'
const fullConfig = resolveConfig(tailwindConfig)

const data: ChartConfiguration["data"] = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderColor: fullConfig.theme.colors.red[500],
      backgroundColor: fullConfig.theme.colors.red[200],
      pointStyle: 'circle',
      pointRadius: 10,
      pointHoverRadius: 15
    }]
}

const type: ChartConfiguration["type"] = 'line';

const options: ChartConfiguration["options"] = {
    responsive: true,
  }

export default function ChartPage() {
    const ref = useRef<HTMLCanvasElement>(null);
    const [chart, setChart] = useState<Chart | null>(null);

    useEffect(() => {
        setChart(chart => {
            if (ref.current !== null && chart === null) {
                const chart = new Chart(ref.current, {
                    type,
                    data,
                    options,
                  });
                return chart
            }
            return null
        });
    }, [chart]);

    return (
        <div>
            <h1>Chart</h1>
            <canvas id="myChart" ref={ref} className='w-96 h-96' />
        </div>
    );
}
