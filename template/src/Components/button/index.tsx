import React from 'react';

import BButton from 'react-bootstrap/Button';

type Props = {
    styles?: any,
    callBack: CallableFunction,
    title: string
}

export default (props: Props) => (
    <BButton
    variant="primary"
          className="bg-info"
          onClick={()=>props.callBack()}
        >
          {props.title}
        </BButton>
);