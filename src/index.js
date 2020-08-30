import React from 'react';
import ReactDOM from 'react-dom';

import Showcase from './Showcase/Showcase';

function SampleComponent() {
    return (
        <div>
            <p> Hi there </p>
            <p> This is just plain HTML </p>
        </div>
    );
}

ReactDOM.render(
    <main>
        <article style={{float: 'left', width: '100%'}}>
            <h2>Just basic html</h2>
            <Showcase>
                <SampleComponent />
            </Showcase>
        </article>
    </main>,
    document.getElementById('root')
);
