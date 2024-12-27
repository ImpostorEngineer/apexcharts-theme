'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function CreateChart({ series, options, type, height, width }) {
  const [chartOptions] = useState(options);
  const [chartSeries] = useState(series);

  return (
    <div>
      <Chart options={chartOptions} series={chartSeries} type={type} height={height} width={width} />
    </div>
  );
}
