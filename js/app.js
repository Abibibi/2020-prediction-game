const app = {
    init: () => {
        app.container = document.getElementById('app');
        app.title();
        app.blackContainer();
        app.replay();
    },

    title: () => {
        app.title = document.createElement('h1');
        app.title.classList.add('title');
        app.title.textContent = 'En 2020, je...';

        app.container.appendChild(app.title);
    },

    blackContainer: () => {
        app.block = document.createElement('div');
        app.block.classList.add('block');

        app.container.appendChild(app.block);
    },

    replay: () => {
        app.replayDiv = document.createElement('div');
        app.replayDiv.classList.add('replayDiv');
        
        app.replay = document.createElement('a');
        app.replay.textContent = 'Rejouer';
        app.replay.href = '#';
        app.replay.addEventListener('click', () => {
            window.location.reload(true);
        });
        app.replay.classList.add('replayDiv-replay');
        
        app.replayDiv.appendChild(app.replay);
        app.container.appendChild(app.replayDiv);
    }
}

document.addEventListener('DOMContentLoaded', app.init);