import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';

export default (props:any) => {
    return (

        <div className='d-flex flex-row'>

        <div className='col-md-3 col-12 overflow-auto'>
        <ListGroup as="ul">
            <ListGroup.Item
                as="a"
                href="/products"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2">
                    <div className="fw-bold">Subheading</div>
                </div>
                <Badge bg="primary" pill>
                    14
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2">
                    <div className="fw-bold">Subheading</div>
                </div>
                <Badge bg="primary" pill>
                    14
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2">
                    <div className="fw-bold">Subheading</div>
                </div>
                <Badge bg="primary" pill>
                    14
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2">
                    <div className="fw-bold">Subheading</div>
                </div>
                <Badge bg="primary" pill>
                    14
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2">
                    <div className="fw-bold">Subheading</div>
                </div>
                <Badge bg="primary" pill>
                    14
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2">
                    <div className="fw-bold">Subheading</div>
                </div>
                <Badge bg="primary" pill>
                    14
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2">
                    <div className="fw-bold">Subheading</div>
                </div>
                <Badge bg="primary" pill>
                    14
                </Badge>
            </ListGroup.Item>
           
        </ListGroup>
        </div>
        <div className='col-md-8 col-12 overflow-auto'>
            {props.children}
        </div>
        

        </div>
    )
}