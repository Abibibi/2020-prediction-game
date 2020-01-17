import predictions from '../data/predictions.js';

const app = {
    init: () => {
        app.container = document.getElementById('app');
        app.container.innerHTML = '';

        app.title();
        app.blackContainer();
        app.displayPrediction();
        app.replay();
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

    prediction: (text) => {
        app.onePrediction = document.createElement('div');
        app.onePrediction.classList.add('block-prediction');
        app.onePrediction.textContent = text;
        
        app.block.appendChild(app.onePrediction);

    },

    displayPrediction: () => {
        app.shuffledPredictions = predictions
        .map((a) => ({
            sort: Math.random(),
            value: a
        }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)

        console.log(app.shuffledPredictions);
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