import React from 'react'
import { Wrapper } from '../../Components';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Login = (props: any) => {
    return (

        <Wrapper className=" col-10 col-lg-5">
            <Form className='py-5'>
                <fieldset enable>
                    <Form.Group className="mb-3 text-center">
                        <Form.Label htmlFor="phone-number">Phone Number</Form.Label>
                        <Form.Control  className='text-center' id="phoneNumber" placeholder="09xxxxxxxxx" />
                    </Form.Group>
                    
                    <Button type="submit" className='w-100'>Submit</Button>
                </fieldset>
            </Form>
        </Wrapper>
    );
}