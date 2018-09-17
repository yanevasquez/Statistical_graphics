
///Exercício 2
var ctx = document.getElementById('graf2').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["1","2","3","4","5","6","7","8"],
        datasets: [{
            data: [4,8,18,27,15,11,10,7,0],
            label: "Faltas",
            backgroundColor: "rgba(81, 180, 127, 0.5490196078431373)",
            hoverBackgroundColor: "rgba(105, 146, 197, 0.7490196078431373)" 
        }  
     ]
    },
    options: {
        layout: {
            padding: {
                left: 50,
                right: 0,
                top:0 ,
                bottom: 0
            }
         },
        title: {
            display: true,
            text: 'Quantidade de Faltas de funcionários da empresa Y',
            fontSize: 14,
            padding: 20
        },
        legend: {
            position: 'bottom',
            labels:{
                boxWidth: 15
            },
        },
        animation:{
            easing: 'easeOutElastic',
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: true,
                    color:"#dcdcdcc2",
	       
                },
                scaleLabel:{
                    display:true,
                    labelString:"Número de funcionários"
                }
            }],
            xAxes: [{
                gridLines: {
                    display: true,
                    color: "#dcdcdcc2"
                }
            }],
        }
    }
});  

//Exercício 3(c)
var ctx = document.getElementById('graf1').getContext('2d');
   var chart = new Chart(ctx, {

       type: 'bar',
       data: {
           labels: ["r1", "r2", "r3", "r4", "r5", "r6", "r7"],
           datasets: [{
               data: [2, 5, 6, 9, 11, 1,1,0] ,
               label: "pessoa/residência",
               backgroundColor:'rgba(102, 0, 153, 0.380392156862)',
               hoverBackgroundColor: 'rgba(102, 0, 153, 0.380392156862)',           
               fill: false,
                    
           },     
        ]
       },
       options: {
           layout: {
               padding: {
                   left: 50,
                   right: 0,
                   top:0 ,
                   bottom: 0
               }
            },
           title: {
               display: true,
               text: 'Números de Residentes no bairro x de João Pessoa ',
               fontSize: 14,
               padding: 20
           },
           legend: {
               position: 'bottom',
               labels:{
                   boxWidth: 15
               },
           },
           animation:{
               easing: 'easeOutElastic',
           },
           scales: {
               yAxes: [{
                   gridLines: {
                       display: true,
                       color:"#dcdcdcc2",
		       
                   },
                   scaleLabel:{
                       display:true,
                       labelString:"Número de pessoas"
                   }
               }],
               xAxes: [{
                   gridLines: {
                       display: true,
                       color: "#dcdcdcc2"
                   }
               }],
           }
       }
   });  
