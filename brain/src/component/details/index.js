import React, {Component} from 'react';
import './index.css';

import {Field, reduxForm} from 'redux-form'

const required = value => value ? undefined : 'Required';
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;
const aol = value =>
    value && /.+@aol\.com/.test(value) ?
        'email contains aol' : undefined

const renderField = (field) => (
    <div className="input-row">
        <input {...field.input} type={field.type}
               className={field.className}
        />
        {field.meta.touched && ((field.meta.error && <span className="error">{field.meta.error}</span>)
            || (field.meta.warning && <span className="error">{field.meta.warning}</span>))}
    </div>
);

class Details extends Component {

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <h1>{this.props.message}</h1>
                <div className="form-group row">
                    <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name</label>
                    <Field
                        validate={[required, maxLength15]}
                        name="firstName"
                        component={renderField}
                        type="text" className="col-sm-10 input-sm"/>
                </div>
                <div className="form-group row">
                    <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</label>
                    <Field
                        validate={[required, maxLength15]}
                        name="lastName"
                        component={renderField}
                        type="text" className="col-sm-10 input-sm"/>
                </div>
                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <Field
                        validate={[email, required]}
                        warn={aol}
                        name="email"
                        component={renderField}
                        type="email" className="col-sm-10 input-sm"
                    />
                </div>
                <div className="form-group row">
                    <label htmlFor="date" className="col-sm-2 col-form-label">Date</label>
                    <Field
                        validate={[required]}
                        name="date"
                        id="date"
                        component={renderField}
                        type="date" className="col-sm-10 input-sm"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }

}

Details = reduxForm({
    form: 'detail'
})(Details);

export default Details;