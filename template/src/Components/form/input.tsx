import React, { ChangeEventHandler } from 'react';


export default (props: {
    style?: any,
    value?: any,
    callBack: CallableFunction,
    aria_label?: string,
}) => {
    return (
        <input
            style={props.style}
            aria-label={props.aria_label}
            value={props.value}
            onChange={(e)=>props.callBack(e.target.value)}
        />
    );
}