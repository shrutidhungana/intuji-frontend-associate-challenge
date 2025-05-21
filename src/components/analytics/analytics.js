// analytics.js
import Chart from "chart.js/auto";

// Function to initialize the analytics chart and its interactions
export default function initAnalytics() {
  const timePeriodDropdown = document.querySelector(".time-period-dropdown");
  const analyticsChartCanvas = document.getElementById("analytics-chart");
  let analyticsChart; // Variable to hold the Chart.js instance

  // Initial chart data for 'weekly' view, closely matching the screenshot's oscillations and 20k limit
  const initialData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Label 1",
        data: [14000, 10500, 14800, 8500, 16500, 20800, 12500], // Oscillating data for Label 1
        borderColor: "#667eea",
        backgroundColor: "rgba(102, 126, 234, 0.3)",
        tension: 0.4,
        pointRadius: 0,
        fill: true,
        order: 1,
      },
      {
        label: "Label 2",
        data: [5800, 9800, 5500, 7000, 11500, 4800, 9500], // Oscillating data for Label 2
        borderColor: "#fbd38d",
        backgroundColor: "rgba(251, 211, 141, 0.3)",
        tension: 0.4,
        pointRadius: 0,
        fill: true,
        order: 2,
      },
    ],
  };

  // Function to create or update the analytics chart
  function createOrUpdateChart(data) {
    if (analyticsChart) {
      analyticsChart.destroy();
    }

    try {
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
              max: 22000, // Adjusted max value to accommodate peaks
              ticks: {
                stepSize: 5000,
                callback: function (value) {
                  return value >= 1000 ? value / 1000 + "k" : value;
                },
              },
              grid: {
                display: true,
                color: "#e2e8f0",
                lineWidth: 1,
                drawTicks: false,
                zeroLineColor: "#e2e8f0",
              },
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                padding: 10,
              },
            },
          },
          elements: {
            line: {
              borderWidth: 2,
            },
            point: {
              radius: 0,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              mode: "index",
              intersect: false,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              titleColor: "#fff",
              bodyColor: "#fff",
              borderColor: "#fff",
              borderWidth: 1,
              callbacks: {
                label: function (context) {
                  let label = context.dataset.label || "";
                  if (label) {
                    label += ": ";
                  }
                  if (context.parsed.y !== null) {
                    label += new Intl.NumberFormat("en-US", {
                      notation: "compact",
                      unitDisplay: "narrow",
                    }).format(context.parsed.y);
                  }
                  return label;
                },
              },
            },
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
        },
      });
    } catch (error) {
      console.error("Error creating chart:", error);
    }
  }

  // Initialize the chart with the default weekly data
  if (analyticsChartCanvas) {
    createOrUpdateChart(initialData);
  }

  // Event listener for the time period dropdown
  if (timePeriodDropdown) {
    timePeriodDropdown.addEventListener("change", (event) => {
      const selectedPeriod = event.target.value;
      let newData;
      if (selectedPeriod === "monthly") {
        newData = {
          labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
          datasets: [
            {
              label: "Label 1",
              data: [45000, 75000, 30000, 85000], // More oscillation for monthly (above 20k, but that's okay based on your description)
              borderColor: "#667eea",
              backgroundColor: "rgba(102, 126, 234, 0.3)",
              tension: 0.4,
              pointRadius: 0,
              fill: true,
              order: 1,
            },
            {
              label: "Label 2",
              data: [70000, 100000, 45000, 80000], // More oscillation for monthly (above 20k)
              borderColor: "#fbd38d",
              backgroundColor: "rgba(251, 211, 141, 0.3)",
              tension: 0.4,
              pointRadius: 0,
              fill: true,
              order: 2,
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
                550000, 850000, 400000, 950000, 650000, 1050000, 750000,
                1000000, 500000, 1150000, 800000, 900000,
              ], // More oscillation for yearly (scaled up, but keeps the pattern)
              borderColor: "#667eea",
              backgroundColor: "rgba(102, 126, 234, 0.3)",
              tension: 0.4,
              pointRadius: 0,
              fill: true,
              order: 1,
            },
            {
              label: "Label 2",
              data: [
                850000, 1100000, 550000, 1250000, 950000, 1350000, 1050000,
                1200000, 650000, 1450000, 1000000, 1150000,
              ], // More oscillation for yearly (scaled up)
              borderColor: "#fbd38d",
              backgroundColor: "rgba(251, 211, 141, 0.3)",
              tension: 0.4,
              pointRadius: 0,
              fill: true,
              order: 2,
            },
          ],
        };
      } else {
        newData = initialData;
      }
      if (analyticsChartCanvas) {
        createOrUpdateChart(newData);
      }
    });
  }
}
