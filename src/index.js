const toggle = document.querySelector('.toggle-change');
const backgroundToggle = document.querySelector('.background-toggle-change');
let corpo = document.querySelector('body');
let mode = document.querySelector('.mode-change');
let cards = document.querySelectorAll('.cards');
const youtubeSubscribers = document.querySelector('.youtube-subscribers');
mode.innerText = 'Dark mode';

backgroundToggle.addEventListener('click', () => {
  toggle.classList.toggle('left-4');
  toggle.classList.toggle('left-0');
  backgroundToggle.classList.toggle('bg-Toggle-dark');
  backgroundToggle.classList.toggle('bg-Toggle-light');
  corpo.classList.toggle('bg-dark-blue');
  corpo.classList.toggle('bg-White-bg');
  corpo.classList.toggle('text-white');
  corpo.classList.toggle('text-black');
  document.querySelector('.top-background').classList.toggle('bg-Very-Dark-Blues');
  cards.forEach(card => {
    card.classList.toggle('bg-Dark-Desaturated-Blue');
    card.classList.toggle('bg-Light-Grayish-Blue');
  })
  if (toggle.classList.contains('left-4')) {
    mode.innerText = 'Light mode';
  }
  else {
    mode.innerText = 'Dark mode';
  }
})

const apiKey = 'AIzaSyDBo0A4ecm9u1_KvwsauJI-ZxAZWFQU3zo';
const channelId = 'UC5PBnSG7C0WXp5gjd4bzKtw';
const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    if (data.items && data.items.length > 0) {
      const statistics = data.items[0].statistics;
      console.log(`Inscritos: ${statistics.subscriberCount}`);
      console.log(`Visualizações: ${statistics.viewCount}`);
      if (statistics.subscriberCount > 1000000) {
        const formattedNumber = Math.floor(statistics.subscriberCount / 1000000)
        youtubeSubscribers.innerText = `${formattedNumber}kk`;
      } else if (statistics.subscriberCount > 10000) {
        const formattedNumber = Math.floor(statistics.subscriberCount / 1000)
        youtubeSubscribers.innerText = `${formattedNumber}k`;
      } else {
        youtubeSubscribers.innerText = statistics.subscriberCount;
      }
    } else {
      console.log('Canal não encontrado');
    }
  })
  .catch(error => console.error('Erro ao buscar dados do canal:', error));