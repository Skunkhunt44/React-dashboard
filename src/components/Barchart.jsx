import React, { useEffect, useRef, useCallback } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = () => {
  const chartRef = useRef(null);

  const getChartOptions = useCallback(() => {
    return {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Trends',
        align:'left'
      },
    //   subtitle: {
    //     text: 'Source: WorldClimate.com'
    //   },
      xAxis: {
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        // title: {
        //   text: 'Rainfall (mm)'
        // }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [
        
        {
          name: 'New',
          data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6],
          color:'red'
        },
        {
          name: 'Renewals',
          data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0],
          color:'#04D5D9'
        },
        {
          name: 'churns',
          data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0],
          color:'#2B2D42'
        },
        // {
        //     type:line,
        //   name: 'this year',
        //   data: [],
        //   showInLegend:false
        // }
      ]
    };
  }, []);

  useEffect(() => {
    const options = getChartOptions();

    if (chartRef.current) {
      Highcharts.chart(chartRef.current, options);
    }
  }, [getChartOptions]);

  return (
    <div ref={chartRef} />
  );
};

export default BarChart;
