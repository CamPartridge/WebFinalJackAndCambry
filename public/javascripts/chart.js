
let chart1statsraw = document.getElementById('stats1').innerText
let chart1stats = chart1statsraw.split(',')

let chart2statsraw = document.getElementById('stats2').innerText
let chart2stats = chart2statsraw.split(',')

let chart3statsraw = document.getElementById('stats3').innerText
let chart3stats = chart3statsraw.split(',')

new Chart(document.getElementById("chart1"), {
    type: 'bar',
    data: {
      labels: ["In a jar", "My back pocket", "My Parents took it", "I lost it"],
      datasets: [
        {
          label: "Count",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
          data: [parseInt(chart1stats[0]),parseInt(chart1stats[1]),parseInt(chart1stats[2]),parseInt(chart1stats[3])]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'User responses to: Where do you keep your will to live?'
      }
    }
});

new Chart(document.getElementById("chart2"), {
    type: 'bar',
    data: {
      labels: ["Have it now", "More than a week ago", "Sometime last month", "I forgor"],
      datasets: [
        {
          label: "Count",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
          data: [parseInt(chart2stats[0]),parseInt(chart2stats[1]),parseInt(chart2stats[2]),parseInt(chart2stats[3])]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'User responses to: When was the last time you had the will to live?'
      }
    }
});

new Chart(document.getElementById("chart3"), {
    type: 'bar',
    data: {
      labels: ["Today", "Last week", "Last month", "Never"],
      datasets: [
        {
          label: "Count",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
          data: [parseInt(chart3stats[0]),parseInt(chart3stats[1]),parseInt(chart3stats[2]),parseInt(chart3stats[3])]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'User responses to: When was the last time you touched grass?'
      }
    }
});


document.getElementById('stats1').hidden = true
document.getElementById('stats2').hidden = true
document.getElementById('stats3').hidden = true