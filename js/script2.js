let myChart = document.getElementById('myChart');
let pieChart = new Chart(myChart, {
  type:'pie' ,
  data:{
    labels:['Car', 'Rent', 'Groceries', 'Credit-card-bills', 'Insurance'],
    datasets: [{
      label: 'expenses',
      data: [
        300,
        300,
        200,
        1000,
        200
      ],
      backgroundColor:[
        'rgba(16, 131, 73, 0.68)',
        'rgba(253, 47, 6, 0.83)',
        'rgba(249, 138, 201, 0.78)',
        'rgba(247, 225, 114, 0.49)',
        'rgba(62, 136, 16, 0.23)'
      ],

    }]
  }
});
