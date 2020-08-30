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

function Showcase(props) {
    const keysToIgnore = props.ignore || [];
    return (
        <div>
            <SyntaxHighlighter language="jsx" style={dark}>
                {JsxString(props.children, keysToIgnore)}
            </SyntaxHighlighter>
            {props.children}
        </div>
    );
}

export default Showcase;
