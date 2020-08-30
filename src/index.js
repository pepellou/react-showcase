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

const articleStyles = {
    float: 'left',
    border: '1px solid #888',
    padding: '15px 30px',
    borderRadius: '10px',
    boxShadow: 'black 10px 10px 24px',
    margin: '30px 20px'
};

ReactDOM.render(
    <main>
        <article style={articleStyles}>
            <h2>Just basic html</h2>
            <Showcase>
                <SampleComponent />
            </Showcase>
        </article>
    </main>,
    document.getElementById('root')
);
