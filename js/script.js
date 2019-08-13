console.log("hi there");


let myChart = document.getElementById('myChart');
let pieChart = new Chart(myChart, {
  type:'pie' ,
  data:{
    labels:['delhi', 'mumbai', 'new york', 'manchester'],
    datasets: [{
      label: 'population',
      data: [
        23000,
        12000,
        21000,
        80000
        ]
    }]
  }
});
let hc = document.getElementById('graph-history')
var myDoughnutChart = new Chart(hc, {
    type: 'doughnut',
    data: data,
    options: options
});
console.log("hi there");
