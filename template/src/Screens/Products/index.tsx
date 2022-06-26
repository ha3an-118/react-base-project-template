import React , {useEffect}from 'react';
import { Container } from 'react-bootstrap';

import { Card } from '../../Components';
import { ProductType } from '../../DTO';
import { selectProducts , fetchProducts } from '../../Redux/Entities/Products';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';

export default () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProducts);
    const renderProductCard = () => {
        return products.map((product: ProductType) => <Card product={product} />)

    }
    useEffect(() => {
        dispatch(fetchProducts(1));
      }, [])
    return (
        <>
        <h2>products</h2>
        <Container className="d-flex flex-wrap justify-content-between" fluid>
           {renderProductCard()}
        </Container>
        </>
    );
}