// analytics.js

function initAnalytics() {
  document.addEventListener("DOMContentLoaded", () => {
    const timePeriodDropdown = document.querySelector(".time-period-dropdown");
    const analyticsChartCanvas = document.getElementById("analytics-chart");

    let analyticsChart; // To hold the Chart.js instance

    // Initial chart data (replace with your actual data fetching logic)
    const initialData = {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Label 1",
          data: [12000, 15000, 8000, 18000, 9000, 22000, 14000],
          borderColor: "#667eea", // Matching Label 1 color
          backgroundColor: "rgba(102, 126, 234, 0.2)", // Slightly transparent fill
          tension: 0.3,
          pointRadius: 3,
          pointBackgroundColor: "#667eea",
        },
        {
          label: "Label 2",
          data: [18000, 20000, 25000, 15000, 28000, 22000, 30000],
          borderColor: "#fbd38d", // Matching Label 2 color
          backgroundColor: "rgba(251, 211, 141, 0.2)", // Slightly transparent fill
          tension: 0.3,
          pointRadius: 3,
          pointBackgroundColor: "#fbd38d",
        },
      ],
    };

    // Function to create or update the analytics chart
    function createOrUpdateChart(data) {
      if (analyticsChart) {
        analyticsChart.destroy(); // Destroy the previous chart instance
      }

      analyticsChart = new Chart(analyticsChartCanvas, {
        type: "line",
        data: {
          labels: data.labels,
          datasets: data.datasets,
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 5000, // Approximate vertical steps like in the image
                callback: function (value) {
                  if (value >= 1000) {
                    return value / 1000 + "k";
                  }
                  return value;
                },
              },
              grid: {
                display: true,
                color: "#e2e8f0", // Light grid lines
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              display: false, // We have our custom legend in the header
            },
          },
        },
      });
    }

    // Initialize the chart with the initial data
    createOrUpdateChart(initialData);

    if (timePeriodDropdown) {
      timePeriodDropdown.addEventListener("change", (event) => {
        const selectedPeriod = event.target.value;
        console.log(`Selected time period: ${selectedPeriod}`);
        // In a real application, you would fetch new data here based on the selected period
        let newData;
        if (selectedPeriod === "monthly") {
          newData = {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            datasets: [
              {
                label: "Label 1",
                data: [50000, 60000, 45000, 70000],
                borderColor: "#667eea",
                backgroundColor: "rgba(102, 126, 234, 0.2)",
                tension: 0.3,
                pointRadius: 3,
                pointBackgroundColor: "#667eea",
              },
              {
                label: "Label 2",
                data: [75000, 80000, 90000, 65000],
                borderColor: "#fbd38d",
                backgroundColor: "rgba(251, 211, 141, 0.2)",
                tension: 0.3,
                pointRadius: 3,
                pointBackgroundColor: "#fbd38d",
              },
            ],
          };
        } else if (selectedPeriod === "yearly") {
          newData = {
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                label: "Label 1",
                data: [
                  600000, 700000, 550000, 800000, 650000, 900000, 750000,
                  850000, 700000, 950000, 800000, 880000,
                ],
                borderColor: "#667eea",
                backgroundColor: "rgba(102, 126, 234, 0.2)",
                tension: 0.3,
                pointRadius: 3,
                pointBackgroundColor: "#667eea",
              },
              {
                label: "Label 2",
                data: [
                  900000, 950000, 1100000, 850000, 1200000, 1000000, 1150000,
                  980000, 1050000, 1300000, 1100000, 1250000,
                ],
                borderColor: "#fbd38d",
                backgroundColor: "rgba(251, 211, 141, 0.2)",
                tension: 0.3,
                pointRadius: 3,
                pointBackgroundColor: "#fbd38d",
              },
            ],
          };
        } else {
          newData = initialData; // Revert to weekly data
        }
        createOrUpdateChart(newData);
      });
    }
  });
}

export default initAnalytics;
