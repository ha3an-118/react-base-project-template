import React from 'react';

export default (props: any) => {
    return (
        <div {...props}>
            {props.children}
        </div>
    );
}