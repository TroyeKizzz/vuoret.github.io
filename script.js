

document.body.style.backgroundColor = "#182039";
Chart.defaults.global.defaultFontColor = "#fff";


//line chart gradient
var ctx_bar = document.getElementById('rain-chart');

var gradientStroke_rain = ctx_bar.getContext("2d").createLinearGradient(0, 0, 0, 400);
gradientStroke_rain.addColorStop(0.25, "#fff");
gradientStroke_rain.addColorStop(1, "transparent");

//line chart gradient
var ctx_temp = document.getElementById('temp-chart').getContext("2d");

var gradientStroke_temp = ctx_temp.createLinearGradient(0, 0, 0, 300);
gradientStroke_temp.addColorStop(0.1, "#FF5C38");
gradientStroke_temp.addColorStop(1, "#3E64FF");

//humi chart gradient
var ctx_humi = document.getElementById('humi-chart').getContext("2d");

var gradientStroke_humi = ctx_humi.createLinearGradient(0, 0, 0, 500);
gradientStroke_humi.addColorStop(0.4, "#3E64FF");
gradientStroke_humi.addColorStop(1, "#A3B1FF");


new Chart(ctx_bar, {
  type: 'bar',
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Rain:",
        backgroundColor: gradientStroke_rain,
        data: [12,11,5,7,3,5,5],
      }
    ],
    borderWidth: 0,
  },
  options: {
    cornerRadius: 12,
    legend: { display: false },
    scales: {
      yAxes: [{
          ticks: {
              fontColor: "#fff",
              fontStyle: "bold",
              beginAtZero: true,
              maxTicksLimit: 5,
              padding: 20
          },
          gridLines: {
            drawTicks: false,
            display: false, 
          }
          }],
      xAxes: [{
          gridLines: {
              drawTicks: false,
              display: false,
          },
          ticks: {
              padding: 20,
              fontColor: "#fff",
              fontStyle: "bold"
          }
      }]
  }

  }
});

new Chart(document.getElementById("temp-chart"), {
  type: 'line',
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{ 
        data: [-5,0,-2,3,-2,5,1],
        label: "Tampere Temp",
        pointRadius: 0,
        borderWidth: 6,
        borderColor: gradientStroke_temp,
        fill: false,
        borderCapStyle: "round"
      }]
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{
          ticks: {
              fontColor: "#fff",
              fontStyle: "bold",
              beginAtZero: true,
              maxTicksLimit: 5,
              padding: 20
          },
          gridLines: {
            drawTicks: false,
            display: false, 
          }
          }],
      xAxes: [{
          gridLines: {
              drawTicks: false,
              display: false,
          },
          ticks: {
              padding: 20,
              fontColor: "#fff",
              fontStyle: "bold"
          }
      }]
    }
  }
});

new Chart(document.getElementById("humi-chart"), {
  type: 'line',
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{ 
        data: [50,40,60,50,50,40,30],
        label: "Humidity",
        pointRadius: 0,
        borderWidth: 9,
        fill: true,
        backgroundColor: gradientStroke_humi,
        borderColor: gradientStroke_humi,
        borderCapStyle: "round"
      }]
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{
          ticks: {
              fontColor: "#fff",
              fontStyle: "bold",
              suggestedMax:100,
              beginAtZero: true,
              maxTicksLimit: 5,
              padding: 20
          },
          gridLines: {
            drawTicks: false,
            display: false, 
          }
          }],
      xAxes: [{
          gridLines: {
              drawTicks: false,
              display: false,
          },
          ticks: {
              padding: 20,
              fontColor: "#fff",
              fontStyle: "bold"
          }
      }]
    }
  }
});
