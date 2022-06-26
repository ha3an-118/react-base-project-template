import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import './index.css';
import { Button } from 'react-bootstrap';

import BasketItemComponent  from './basketItem';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { selectBasket,selectTotalCounter,selectTotalPaymentAmount,selectTotalAmount } from '../../Redux/Entities/Basket';
import { BasketItem } from '../../Redux/Entities/Basket/Type';

import { useTranslation } from 'react-i18next';

const Basket = () => {
    const { t} = useTranslation('basket');
    const dispatch = useAppDispatch();
    const Basket = useAppSelector(selectBasket);
    const totalCounter  = useAppSelector(selectTotalCounter);
    const totalPaymentAmount = useAppSelector(selectTotalPaymentAmount);
    const totalAmount = useAppSelector(selectTotalAmount);

    const renderBasketItem = (temp: BasketItem[])=> {
        return temp.map((item)=> {
            return <BasketItemComponent BasketItem={item} Translation={t} />
        });

    }
    
    return (
        <div key='basket' className='d-flex flex-column flex-lg-row'>
            <div tabIndex={0} className='col-12 col-lg-3'>
                <div aria-label='payment details' tabIndex={-1}>
                    <div className='bg-light rounded shadow-sm p-2' tabIndex={0} >
                        <div className='d-flex flex-row flex-nowrap justify-content-center' aria-label='payment step'>
                            <div className='d-flex flex-column justify-content-center mx-3'>
                                <div className=''>
                                    <FontAwesomeIcon icon={solid("cart-shopping")} className='fa-2x  fa-border border border-primary rounded-circle p-3' />
                                </div>
                                <div className='text-center'>
                                    {t("Basket")}
                                </div>
                            </div>
                            <div className='d-flex flex-column justify-content-center mx-3'>
                                <div className=''>
                                    <FontAwesomeIcon icon={solid("map-location")} className='fa-2x  fa-border border border-primary rounded-circle p-3' />
                                </div>
                                <div className='text-center'>
                                    {t("Location")}
                                </div>
                            </div>
                            <div className='d-flex flex-column justify-content-center mx-3'>
                                <div className=''>
                                    <FontAwesomeIcon icon={solid("credit-card")} className='fa-2x  fa-border border border-primary rounded-circle p-3' />
                                </div>
                                <div className='text-center'>
                                    {t("Payment")}
                                </div>
                            </div>


                        </div>
                        <div className='mt-4' aria-label='invoice details'>
                            <div aria-label='total amount' className='d-flex flex-row justify-content-between border-bottom my-2 py-1'>
                                <div>
                                    {t("TotalAmount")}
                                </div>
                                <div>
                                    <span>{t("currency")} &nbsp;</span>
                                    <span>{(totalAmount).toLocaleString()}</span>
                                </div>
                            </div>
                            <div aria-label='discount amount' className='d-flex flex-row justify-content-between border-bottom my-2 py-1 text-danger'>
                                <div>
                                    {t("DiscountAmount")}
                                </div>
                                <div>
                                    <span>{t("currency")} &nbsp;</span>
                                    <span>{(totalPaymentAmount).toLocaleString()}</span>
                                </div>
                            </div>
                            <div aria-label='paying  amount' className='d-flex flex-row justify-content-between border-bottom my-2 py-1'>
                                <div>
                                    {t("PayingAmount")}
                                </div>
                                <div>
                                    <span>{t("currency")} &nbsp;</span>
                                    <span>{(totalPaymentAmount).toLocaleString()}</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div aria-label='payment process' className='mt-4'>
                    <Button className='w-100'>
                        {t('ContinueProcess')}
                    </Button>

                </div>
            </div>
            <div aria-label='products list' tabIndex={0} className='col-12 col-lg-9 mx-1 overflow-auto'>
                {renderBasketItem(Basket)}
                
            </div>

        </div>

    );
}
export default Basket;