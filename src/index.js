import React from 'react';
import ReactDOM from 'react-dom';

import ReactMarkdown from 'react-markdown';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import Showcase from './Showcase/Showcase';

const sampleMarkdown = '# This is a header\n\nAnd this is a paragraph\n - Bullet item 1\n - Bullet item 2'

function HelloWorld() {
    return ( <p> Hello world </p> );
}

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

const propertiesToIgnoreForCards = [
    'acceptedCards',
    'locale',
    'placeholders',
    'preview'
];

ReactDOM.render(
    <main>
        <Showcase name="HelloWorld">
            <HelloWorld />
        </Showcase>
        <Showcase name="ReactMarkdown" source="https://github.com/rexxars/react-markdown" ignore={propertiesToIgnoreForMarkdown}>
            <ReactMarkdown source={sampleMarkdown} />
        </Showcase>
        <Showcase name="Cards" source="https://github.com/amarofashion/react-credit-cards" ignore={propertiesToIgnoreForCards}>
            <Cards
                cvc=''
                expiry='7/22'
                focused=''
                name='JOHN DOE'
                number='1234567812345678'
                />
        </Showcase>
        <Showcase name="Showcase" source="https://github.com/pepellou/react-showcase">
            <Showcase name="HelloWorld">
                <HelloWorld />
            </Showcase>
        </Showcase>
    </main>,
    document.getElementById('root')
);
