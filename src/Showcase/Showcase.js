import React from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const JsxString = (component, keysToIgnore = [], counter = 0) => {
    let type = component.type.name;
    let props = component.props;
    let propsString = "";
    for (let key in props) {
        if (key !== "children" && keysToIgnore.indexOf(key) === -1) {
            let propValue = props[key];
            let value = "";
            if (propValue instanceof Object) {
                //value = `{${JSON.stringify(propValue).replace(/['"]+/g, '')}}`;
                value = `"${propValue}"`;
            } else {
                value = `"${propValue}"`;
            }
            propsString += ` ${key}=${value}`;
        }
    }
    if (props.children) {
        counter += 2;
        var children = JsxString(props.children, keysToIgnore, counter);
        return `<${type}${propsString}>
${Array(counter).join(" ")}  ${children}
${Array(counter).join(" ")}</${type}>`;
    }
    return `<${type}${propsString} />`;
}

function ShowcaseTitle(props) {
    const name = props.name || '';
    const source = props.source || null;
    if (source === null) {
        return (
            <h2>{name}</h2>
        );
    }
    return (
        <h2><a target="_blank" href={source}>{name}</a></h2>
    );
}

function Showcase(props) {
    const keysToIgnore = props.ignore || [];
    const name = props.name || '';
    const source = props.source || null;
    const articleStyles = {
        width: '80%',
        border: '1px solid #888',
        padding: '15px 30px',
        borderRadius: '10px',
        boxShadow: 'black 10px 10px 24px',
        margin: '30px auto'
    };

    return (
        <article style={articleStyles}>
            <ShowcaseTitle name={name} source={source} />
            <SyntaxHighlighter language="jsx" style={dark}>
                {JsxString(props.children, keysToIgnore)}
            </SyntaxHighlighter>
            <hr />
            {props.children}
        </article>
    );
}

export default Showcase;
