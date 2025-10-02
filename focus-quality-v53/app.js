// Chat simples
const chatContainer = document.getElementById('chat-container');
chatContainer.textContent = 'Módulo de chat estará disponível em breve.';
// Mapa Leaflet
const map = L.map('map').setView([-15.7801,-47.9292],4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19}).addTo(map);
// Charts Chart.js
const ages = [10,20,30,40,50,60];
new Chart(document.getElementById('chart-age'), { type:'bar',
  data:{ labels:['18-25','26-35','36-45','46-55','56-65','65+'], datasets:[{ label:'Ocorrências', data:ages, backgroundColor:'#3182CE' }] }
});
new Chart(document.getElementById('chart-gender'), { type:'pie',
  data:{ labels:['Masculino','Feminino'], datasets:[{ data:[60,40], backgroundColor:['#2B6CB0','#CBD5E0'] }] }
});