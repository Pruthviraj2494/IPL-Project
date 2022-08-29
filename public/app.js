  // 1st question //
  const visualizeMatchesPlayedPerYear = (matchesPlayedPerYear) => {
    let seriesData = Object.entries(matchesPlayedPerYear);

  
    Highcharts.chart("matches-played-per-year", {
      chart: {
        type: "column",
      },
      title: {
        text: "Matches Played Per Year",
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>',
      },
      xAxis: {
        type: "category",
      },
      yAxis: {
        min: 0,
        title: {
          text: "Matches",
        },
      },
      series: [
        {
          name: "Years",
          data: seriesData,
        },
      ],
    });
  }


/// 2nd question //
  const visualizeMatchesWonByAllTeams = (matchesWonByAllTeams)=>{
    let seriesData = Object.entries(matchesWonByAllTeams);

  Highcharts.chart("matches-by-won-all-teams", {
    chart: {
      type: 'column'
  },
  title: {
      text: 'Matches won by all teams each year'
  },
  subtitle: {
      text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>',
  },
  xAxis: {
      categories: [
          '2008',
          '2007',
          '2009',
          '2010',
          '2011',
          '2012',
          '2013',
          '2014',
          '2015',
          '2016',
          '2017'
      ],
      crosshair: true
  },
  yAxis: {
      min: 0,
      title: {
          text: "wins"
      }
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
  series: seriesData
});
}




const visualizeData = (data)=>{
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizeMatchesWonByAllTeams(data.matchesWonByAllTeamsEachYear);


  return;
}

const fetchAndVisualizeData = async ()=>{
  await fetch("./data.json")
    .then((r) => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();
