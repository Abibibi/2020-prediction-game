import predictions from './data/predictions.js';
import picture from './assets/images/abi.svg';

import './styles/css/reset.css';
import './styles/css/style.css';

const app = {
    init: () => {
        app.container = document.getElementById('app');
        app.container.innerHTML = '';

        app.title();
        app.blackContainer();
        app.prediction();
        app.picture();
        app.replay();
        app.instant = setInterval(app.changePrediction, 60);
    },

    title: () => {
        app.gameTitle = document.createElement('h1');
        app.gameTitle.classList.add('title');
        app.gameTitle.textContent = 'En 2020, je...';

        app.container.appendChild(app.gameTitle);
    },

    blackContainer: () => {
        app.block = document.createElement('div');
        app.block.classList.add('block');

        app.container.appendChild(app.block);
    },

    prediction: () => {
        app.onePrediction = document.createElement('div');
        app.onePrediction.classList.add('block-prediction');
        
        app.block.appendChild(app.onePrediction);
    },

    counter: 0,

    changePrediction: () => {
        app.shuffledPredictions = predictions
        .map((a) => ({
            sort: Math.random(),
            value: a
        }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value.texte);
        
        app.onePrediction.textContent = app.shuffledPredictions[app.counter];
        
        app.counter++;
        
        if(app.counter >= app.shuffledPredictions.length) {
            app.counter = 0;
            clearInterval(app.instant);
        } 
    },

    picture: () => {
        app.pictureElement = document.createElement('img');
        app.pictureElement.src = picture;
        app.pictureElement.alt = "Femme levant les bras en l'air, donnant l'impression de tenir le bloc où défilent les prédictions pour 2020."
        app.pictureElement.classList.add('picture');

        app.container.appendChild(app.pictureElement);
    },

    replay: () => {
        app.replayDiv = document.createElement('div');
        app.replayDiv.classList.add('replayDiv');

        app.replayLink = document.createElement('a');
        app.replayLink.textContent = 'Rejouer';
        app.replayLink.href = '#';
        app.replayLink.addEventListener('click', () => {
            app.init();
        });
        app.replayLink.classList.add('replayDiv-replay');
        
        app.replayDiv.appendChild(app.replayLink);
        app.container.appendChild(app.replayDiv);
    }
}

document.addEventListener('DOMContentLoaded', app.init);