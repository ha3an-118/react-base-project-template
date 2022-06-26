import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../Redux/hooks';
import {add} from '../../Redux/Entities/Basket';

import { selectProduct, fetchProductById } from '../../Redux/Entities/Product';
import { Button, Carousel } from 'react-bootstrap';
import { readTargetId } from './logic';
import { ContentType } from '../../DTO';



export default () => {
  const dispatch = useAppDispatch();
  const targetId = readTargetId();
  const product = useAppSelector(selectProduct);
  const offPriceFlag = (product?.off_price == product?.price)
        ? false
        : true;
    const offPrecent = Math.round(((product.price - product.off_price) / product.price) * 100);

  const renderContent = (contents: ContentType[])=>
  {
      return contents.map((value: ContentType) => {
        return (
          <Carousel.Item>
            <img 
            className="d-block w-100" 
            src={value.link} 
            alt="First slide"
            id={value.hash} />
          </Carousel.Item>
        )
      })
  }

  useEffect(() => {
    dispatch(fetchProductById(targetId));
  }, [])




  return (
  <div className='bg-white'>
    <div className='d-flex flex-md-row flex-column'>
      <div className=' col-12 col-md-4'>
        <Carousel>
          {renderContent(product.contents)}
          
        </Carousel>
      </div>
      <div className='col-12 col-md-8 d-flex flex-md-row flex-column'>
        <div className='col-12 col-md-7'>
            <div className='p-3'>
              <h2>{product.title}</h2>
            </div>
        </div>
        <div className='bg-light col-12 col-md-4 mt-3 p-3'>
            <div className=''>
              <div>seller</div>
              <div>
                <h5 className='text-secondary'>
                {product?.store?.title}
                </h5>
                </div>
              <hr/>
              <div aria-label='price part'>
                <h5></h5>

              </div>
              <div className='d-flex flex-column align-items-end'>
                        <div className='d-flex flex-row'>
                            <span aria-label='price' className='text-danger'>{product?.off_price.toLocaleString()}</span>
                            <span>&nbsp;-&nbsp;</span>
                            <span aria-label='currency'><small>Toman</small></span>
                        </div>
                        {offPriceFlag && <span aria-label='price with out off' className='text-muted'><del>{product?.price.toLocaleString()}</del></span>}

                    </div>

            </div>
            <div className="mt-4">
              <Button
                onClick={()=> {dispatch(add(product))}}
              className="w-100">Add To Basket </Button>

            </div>

        </div>

      </div>

    </div>
  </div>);
}