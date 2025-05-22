// analytics.js
import Chart from "chart.js/auto";

// Function to initialize the analytics chart and its interactions
export default function initAnalytics() {
  const timePeriodDropdown = document.querySelector(".time-period-dropdown");
  const analyticsChartCanvas = document.getElementById("analytics-chart");
  let analyticsChart; 

 
  const initialData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Label 1",
        data: [
          14000, 12000, 15500, 10000, 16500, 9000, 17500, 11500, 15000, 13000,
          18000, 10500, 16000, 14000,
        ], 
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
          6000, 8000, 5500, 10500, 7500, 9500, 6000, 12000, 8500, 11000, 7000,
          13500, 9000, 10000,
        ], 
        borderColor: "#F8CD70",
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
              max: 20000, 
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

 
  if (analyticsChartCanvas) {
    createOrUpdateChart(initialData);
  }

 
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
              data: [16000, 13000, 17000, 11000, 18500, 12500, 15000, 14500], // More data points for monthly
              borderColor: "#667eea",
              backgroundColor: "rgba(102, 126, 234, 0.3)",
              tension: 0.4,
              pointRadius: 0,
              fill: true,
              order: 1,
            },
            {
              label: "Label 2",
              data: [7000, 10000, 8000, 15000, 9500, 12000, 6500, 11500], // More data points for monthly
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
                11000, 10500, 14500, 10000, 15500, 12000, 16500, 11500, 14000,
                9500, 17000, 13000, 12500, 15000, 11000, 16000, 13500, 10000,
                14000, 12000, 16500, 10500, 15000, 13000,
              ], // Even more data points for yearly
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
                7500, 10500, 6500, 13000, 8000, 11000, 7000, 13500, 9000, 12000,
                8500, 10000, 9500, 11500, 7000, 12500, 8000, 10000, 7500, 13000,
                9000, 11500, 8500, 10500,
              ], 
              borderColor: "#fbd38d",
              backgroundColor: "#F8CD70",
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
