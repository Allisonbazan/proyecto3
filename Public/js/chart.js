// obtener datos de la api para grafico
import { getDigimon } from './api.js'
export const ctx = document.getElementById('myChart').getContext('2d');
const data2 = await getDigimon();
// Contador para los nivesles de los digimon
let champion = 0, rookie = 0, ultimate = 0, training = 0, mega = 0, intraining = 0, fresh = 0, armor = 0;
for (const property in data2) {
    if (data2[property].level=='Champion') champion++;
    if (data2[property].level=='Rookie') rookie++;
    if (data2[property].level=='Ultimate') ultimate++;
    if (data2[property].level=='Training') training++;
    if (data2[property].level=='Mega') mega++;
    if (data2[property].level=='In Training') intraining++;
    if (data2[property].level=='Fresh') fresh++;
    if (data2[property].level=='Armor') armor++;  

}
// Grafico Chart en forma de pie
export const myChart = async () => {
    Chart.defaults.font.size = 24;
    Chart.defaults.color =  'rgba(0, 0, 0)';
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Champion', 'Rookie', 'Ultimate', 'Training', 'Mega', 'In Training', 'Fresh', 'Armor'],
            datasets: [{
                label: '#',
                data: [champion, rookie, ultimate, training, mega, intraining, fresh, armor],
                backgroundColor: [
                    'rgba(255, 99, 132, .8)',
                    'rgba(54, 162, 235, .8)',
                    'rgba(255, 206, 86, .8)',
                    'rgba(75, 192, 192, .8)',
                    'rgba(153, 102, 255, .8)',
                    'rgba(255, 159, 64, .8)',
                    'rgba(23, 82, 100, .8)',
                    'rgba(205, 139, 44, .8)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(23, 82, 100, 1)',
                    'rgba(205, 139, 44, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels:{
                        color:'#fff'
                    
                },
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Cantidad de Digimones por Nivel',
                    color: '#fff',
                },
            }
        }

    });
}

myChart();
