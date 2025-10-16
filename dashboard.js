// Example dataset (later you can fetch from backend or file)
const data = [
  { time: "10:00", temp: 29.4, co: 3.5 },
  { time: "11:00", temp: 30.1, co: 4.1 },
  { time: "12:00", temp: 31.0, co: 4.6 }
];

// Extract labels and values
const labels = data.map(d => d.time);
const tempData = data.map(d => d.temp);
const coData = data.map(d => d.co);

// Temperature Chart
new Chart(document.getElementById("tempChart"), {
  type: "line",
  data: {
    labels: labels,
    datasets: [{
      label: "Temperature (°C)",
      data: tempData,
      borderColor: "red",
      fill: false
    }]
  }
});

// CO Chart
new Chart(document.getElementById("coChart"), {
  type: "bar",
  data: {
    labels: labels,
    datasets: [{
      label: "Carbon Monoxide (ppm)",
      data: coData,
      backgroundColor: "orange"
    }]
  }
});
