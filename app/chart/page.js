'use client';
// import { useChangeTheme } from '@/components/useChangeTheme';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

import { useTheme } from '../context/ThemeContext';

export default function Dashboard({}) {
  const { theme } = useTheme();
  console.log(theme, 'this is dashboard');

  let [chartState, setChartState] = useState({
    options: {
      title: { text: 'Hello World' },
      chart: {
        // background: '#000',
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 0,
          color: '#000',
          opacity: 1,
        },
        toolbar: {
          show: true,
        },
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
      theme: {
        mode: theme,
        palette: 'palette6',
      },
    },
  });
  const series = [
    {
      name: 'series-1',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
    {
      name: 'series-2',
      data: [10, 20, 85, 20, 79, 10, 40, 11, 25],
    },
    {
      name: 'series-3',
      data: [30, 30, 55, 70, 15, 30, 35, 40, 45],
    },
    {
      name: 'series-4',
      data: [20, 5, 10, 15, 10, 20, 25, 30, 35],
    },
    {
      name: 'series-5',
      data: [20, 15, 100, 35, 120, 120, 75, 50, 85],
    },
    {
      name: 'series-6',
      data: [50, 20, 25, 130, 25, 40, 45, 50, 155],
    },
  ];

  useEffect(() => {
    setChartState((prev) => {
      console.log(theme, 'this is chart');
      prev.options.theme.mode = theme === 'light' ? 'light' : 'dark';
      return prev;
    });
  }, [theme]);

  const [chartSeries] = useState(series);

  return (
    <div>
      <div className='flex flex-col items-center justify-center py-5'>
        <Chart
          options={chartState.options}
          series={chartSeries}
          type='line'
          width={800}
          height={400}
          key={chartState.options.theme.mode}
        />
      </div>
    </div>
  );
}
