import React from 'react';
import Lodash from 'lodash';

import { Card } from 'react-bootstrap';
import { ProductType } from '../DTO';
import { Product } from '../Screens';

export default (props: {
    product: ProductType,
}) => {
    const Image = props.product?.contents?.[0];
    const offPriceFlag = (props?.product?.off_price == props?.product?.price)
        ? false
        : true;
    const offPrecent = Math.round(((props.product.price - props.product.off_price) / props.product.price) * 100);
    return (
        <div className="position-relative mx-1 my-1 " style={{ width: "17rem" }} key={props.product.id}>
            {offPriceFlag && <span className="bg-danger p-1 px-3 rounded position-absolute " style={{ zIndex: '1', top: "1rem", right: "-.5rem" }}>{offPrecent}%</span>}
            <Card >
                <Card.Img variant="top" src={Image?.link} />
                <Card.Body>

                    <Card.Link href={`/product/${props.product.id}`} className="text-black text-decoration-none">
                    <Card.Title>{
                    Lodash.truncate(
                    props.product?.title,{'length': 40,
                    'omission': '...'})}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{
                    Lodash.truncate( 
                    props?.product?.store?.title, {'length': 25,
                    'omission': '...'})}</Card.Subtitle>
                    </Card.Link>
                    <div className='d-flex flex-column align-items-end'>
                        <div className='d-flex flex-row'>
                            <span aria-label='price' className='text-danger'>{props?.product?.off_price.toLocaleString()}</span>
                            <span>&nbsp;-&nbsp;</span>
                            <span aria-label='currency'><small>Toman</small></span>
                        </div>
                        {offPriceFlag && <span aria-label='price with out off' className='text-muted'><del>{props?.product?.price.toLocaleString()}</del></span>}

                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}