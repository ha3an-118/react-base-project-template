import React from 'react';
import { BasketItem } from '../../Redux/Entities/Basket/Type';
import { Button, Ratio } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import {increase , decrease ,remove} from '../../Redux/Entities/Basket';
import { useAppDispatch } from '../../Redux/hooks';

const BasketItemComponent = (props: {
    BasketItem: BasketItem,
    Translation: any,
}) => {
    const dispatch = useAppDispatch();
    const product = props.BasketItem.product;
    const counter = props.BasketItem.counter;
    const image = product.contents?.[0];
    const t = props.Translation;
    return (
        
            <div key={product.id} className='bg-light rounded shadow-sm p-2 mx-auto  col-12 col-lg-10 mt-3' tabIndex={0} >
                <div className='d-flex flex-column flex-lg-row'>
                    <div aria-label='product image' className='col-12 col-lg-3'>
                        <Ratio aspectRatio="1x1">
                            <img
                                alt='product image'
                                className='img-thumbnail'
                                src={image?.link} />
                        </Ratio>
                    </div>
                    <div className='col-12 col-lg-9 mx-2 d-flex flex-column'>
                        <div aria-label='product name' className='mt-2'>
                            <a href={`/product/${product.id}`} className='text-black '>
                            <h4>{product.title}</h4>
                            </a>
                        </div>
                        <div aria-label='store name'>
                           {product.store?.title}
                        </div>
                        <div aria-label='product information'>
                            <div aria-label='product number'>
                                <span>{product.id}</span>
                                &nbsp;
                                <span>{t("ProductNumber")}</span>

                            </div>

                        </div>
                        <div aria-label='product action' className='mt-3'>
                            <div aria-label='control product amount'>
                                <Button 
                                    onClick={()=>dispatch(increase(product))}
                                aria-label='increase amount'>+</Button>
                                <span>{counter}</span>
                                <Button 
                                onClick={()=>dispatch(decrease(product))}
                                aria-label='decrease amount'>-</Button>
                                <Button 
                                onClick={()=>dispatch(remove(product))}
                                
                                aria-label='delete product'>
                                    <FontAwesomeIcon icon={solid("trash-can")} />
                                </Button>

                            </div>

                        </div>

                    </div>

                </div>
                <div className='mt-3'>
                    <div className='mt-4' aria-label='invoice details'>
                        <div aria-label='total amount' className='d-flex flex-row justify-content-between border-bottom my-2 py-1'>
                            <div>
                            {t("TotalAmount")}
                            </div>
                            <div>
                                <span>{t("currency")} &nbsp;</span>
                                <span>{(product.price).toLocaleString()}</span>
                            </div>
                        </div>
                        <div aria-label='discount amount' className='d-flex flex-row justify-content-between border-bottom my-2 py-1 text-danger'>
                            <div>
                            {t("DiscountAmount")}
                            </div>
                            <div>
                                <span>{t("currency")} &nbsp;</span>
                                <span>{(product.off_price).toLocaleString()}</span>
                            </div>
                        </div>
                        <div aria-label='paying  amount' className='d-flex flex-row justify-content-between my-2 py-1'>
                            <div>
                            {t("PayingAmount")}
                            </div>
                            <div>
                                <span>{t("currency")} &nbsp;</span>
                                <span>{(product.off_price*counter).toLocaleString()}</span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
       
    );

}

export default BasketItemComponent;