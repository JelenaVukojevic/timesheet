import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export default function TaskForm() {
    const { register, handleSubmit, watch, errors, formState } = useForm();
    const onSubmit = data => console.log(data);

    return(
        <Form action="" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="field-wrap">
                <Form.Label className="label" htmlFor="">Title:</Form.Label>
                <Form.Control 
                    className="field" 
                    type="text" 
                    name="title" 
                    id="" 
                    placeholder="Enter title here..." 
                    ref={ register({ required: true }) } 
                />
            </Form.Group>
            <Form.Group className="field-wrap">
                <Form.Label className="label" htmlFor="">Hours:</Form.Label>
                <Form.Control 
                    className="field"
                    type="text"
                    name="hours"
                    id=""
                    placeholder="Add hours here..."
                    ref={ register({ required: true }) } 
                />
            </Form.Group>
            {errors.title && <p className="error">Title is required</p>}
            {errors.hours && <p className="error">Hours is required</p>}
            <Form.Group className="btn-wrap align-right">
                <Button variant="primary" type="submit" disabled={!formState.isValid} >
                    Create
                </Button>
            </Form.Group>
        </Form>
    );
}