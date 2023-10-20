import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PieChart = () => {
  useEffect(() => {
    const options = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
      },
      title: {
        text: 'Sales',
        align: 'left',
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
          },
          showInLegend: true,
        },
      },
      series: [
        {
          name: 'Brands',
          colorByPoint: true,
          data: [
            {
              name: 'Basic plan',
              y: 74.77,
            //   sliced: true,
            //   selected: true,
            },
            {
              name: 'Pro plan',
              y: 12.82,
            },
            {
              name: 'Advanced plan',
              y: 4.63,
            },
            {
              name: 'Enterprise plan',
              y: 2.44,
            },
          ],
        },
      ],
    };

    Highcharts.chart('container', options);
  }, []);

  return <div id="container" />;
};

export default PieChart;
