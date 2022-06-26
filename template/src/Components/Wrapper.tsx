import React from 'react'

export const Wrapper = (props: any)=>{
    return (
        <div className={`bg-light rounded shadow-sm p-2 mx-auto mt-3 ${props?.className} `} tabIndex={0} >
            {props?.children}
        </div>
    );
}