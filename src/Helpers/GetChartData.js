export const getChartData = (categoryName, chartTitle, chartsData) => {

  const foundCategory = chartsData.find((cat) => cat.category === categoryName);

  if (foundCategory) {
    const foundChart = foundCategory.charts.find(
      (chart) => chart.title.replace(/\s+/g, "") === chartTitle.replace(/\s+/g, "")
    );

    if (foundChart) {
      return foundChart.chart;
    } else {
      const newChart = { title: chartTitle.replace(/\s+/g, ""), chart: [] };
      foundCategory.charts.push(newChart);
      return newChart.chart;
    }
  } else {
    return null;
  }








  // return;

  // const category = chartsData.find((cat) => {
  //   return cat.category === categoryName;
  // });

  // if (!category) {
  //   return `Category '${categoryName}' not found.`;
  // }

  // const chart = category.charts.filter((ch) => {
  //   const normalizedChTitle = ch.title
  //     .toString()
  //     .replace(/\s+/g, "")
  //     .toLowerCase();
  //   const normalizedChartTitle = chartTitle
  //     .toString()
  //     .replace(/\s+/g, "")
  //     .toLowerCase();
  //   return normalizedChTitle === normalizedChartTitle;
  // });

  // if (!chart) {
  //   return `Chart with title '${chartTitle}' not found in category '${categoryName}'.`;
  // }

  // return chart[0].chart;
};
