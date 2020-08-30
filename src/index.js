import React from 'react';
import ReactDOM from 'react-dom';

import ReactMarkdown from 'react-markdown';
import Cards from 'react-credit-cards';

import Showcase from './Showcase/Showcase';

const sampleMarkdown = '# This is a header\n\nAnd this is a paragraph'

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

const propertiesToIgnoreForMarkdown = [
    'renderers',
    'escapeHtml',
    'skipHtml',
    'sourcePos',
    'rawSourcePos',
    'transformLinkUri',
    'astPlugins',
    'plugins',
    'parserOptions'
];

ReactDOM.render(
    <main>
        <article style={articleStyles}>
            <h2>Just a sample component</h2>
            <Showcase>
                <SampleComponent />
            </Showcase>
        </article>
        <article style={articleStyles}>
            <h2>ReactMarkdown</h2>
            <Showcase ignore={propertiesToIgnoreForMarkdown}>
                <ReactMarkdown source={sampleMarkdown} />
            </Showcase>
        </article>
        <article style={articleStyles}>
            <h2>Credit Cards</h2>
            <Showcase>
                <div id="PaymentForm">
                    <Cards
                        cvc=''
                        expiry=''
                        focused=''
                        name=''
                        number=''
                        />
                    <form>
                        <input
                            type="tel"
                            name="number"
                            placeholder="Card Number"
                            />
                    </form>
                </div>
            </Showcase>
        </article>
    </main>,
    document.getElementById('root')
);
