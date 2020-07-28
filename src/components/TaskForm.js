import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export default function TaskForm(props) {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {props.saveTask(data.title, data.hours)};
    const watchTitle = watch("title");
    const watchHours = watch("hours");

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
                    area-invalid={errors.title ? "true" : "false"}
                    ref={ register({ required: true }) } 
                />
                {errors.title && (<p className="error">Field Title is required</p>)}
            </Form.Group>
            <Form.Group className="field-wrap">
                <Form.Label className="label" htmlFor="">Hours:</Form.Label>
                <Form.Control 
                    className="field"
                    type="number"
                    name="hours"
                    id=""
                    step="0.05"
                    placeholder="Add hours here..."
                    area-invalid={errors.hours ? "true" : "false"}
                    ref={ 
                        register({ 
                            required: true,
                            pattern: /^[0-9]+(\.[0-9]{2})?/
                        }) 
                    } 
                />
                {errors.hours?.type === 'required' && <p className="error">Field Hours is required</p>}
                {errors.hours?.type === 'pattern' && <p className="error">Field Hours can contain numbers</p>}
            </Form.Group>
            {!props.edit && (
                <Form.Group className="btn-wrap align-right">
                    {(!!watchTitle && !!watchHours) && (
                        <Button variant="primary" type="submit"  >
                            Create
                        </Button>
                    )}
                    {(!watchTitle || !watchHours) && (
                        <Button variant="primary" type="submit" disabled={true}>
                            Create
                        </Button>
                    )}
                </Form.Group>
            )}
            {props.edit && (
                <Form.Group className="btn-wrap align-right">
                    <Button variant="secondary" onClick={props.close} >
                        Cancel
                    </Button>
                    {(!!watchTitle && !!watchHours) && (
                        <Button variant="primary" type="submit" >
                            Save
                        </Button>
                    )}
                    {(!watchTitle || !watchHours) && (
                        <Button variant="primary" type="submit" disabled={true}>
                            Save
                        </Button>
                    )}
                </Form.Group>
            )}
        </Form>
    );
}