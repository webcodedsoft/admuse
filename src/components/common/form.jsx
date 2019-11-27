import React, {Component} from 'react';
import Joi from 'joi-browser';
import Input from './input';
import TextArea from './textArea';
import Select from './Select';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';


class Form extends Component {

    state = {
        data: {},
        errors: {},
        selectedOption: null,
    }; 

    validate = () => {
        const options = {abortEarly: false,allowUnknown:true};
        const {error} = Joi.validate(this.state.data, this.schema, options);
        if (!error) return null;
        const errors = {};
        let item = "";
        for (item of error.details) {
            let errorKey = item.path[0];
            errors[errorKey] = item.message
        }
        return errors;
    }

    validateProperty = ({name, value}) => {
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj, schema);
        return (!error) ? null : error.details[0].message;

    }

    handleSubmit = (e) => {

        e.preventDefault();

        const errors = this.validate();
        this.setState({errors: errors || {}});
        console.log(errors);
        if (errors) return;
        this.doSubmit();
    }

    handleChange = ({currentTarget: input}) => {

        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);

        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = {...this.state.data}
        data[input.name] = input.value;

        this.setState({data, errors});
    }

    handleMultiSelectValueChange = (selected, name = null) => {
        let data = [];
        Array.from(selected).forEach(v => data.push(v.value));
        this.setState({data: {...this.state.data, [name]: data}});
    };

    renderButton(label) {
        return (
            <button disabled={this.validate()} className="btn abtn abtn-2">
                {label}
            </button>
        );
    }

    renderInput(name, label, type = "text") {
        const {data, errors} = this.state;
        return (
            <Input type={type} value={data[name]} error={errors[name]} name={name} id={name} label={label}
                   onChange={this.handleChange}/>
        );
    }

    renderTextArea(name, label) {
        const {data, errors} = this.state;
        return (
            <TextArea value={data[name]} error={errors[name]} name={name} label={label} onChange={this.handleChange}/>
        );
    }

    renderSelect(name, label, options = []) {
        const {data, errors} = this.state;
        return (
            <Select
                value={data[name]}
                error={errors[name]}
                name={name}
                label={label}
                onChange={this.handleChange}
                options={options}
            />
        );
    }

    renderMultiSelect(name, label, options, changeFunction) {
        return (
            <div className="form-group">
                <div className="multi-select">
                    <ReactMultiSelectCheckboxes
                        placeholderButtonLabel={label}
                        options={options}
                        onChange={(selected) => changeFunction(selected, name)}
                        style={this.selectStyle}
                    />
                </div>
            </div>
        );
    }
}

export default Form;