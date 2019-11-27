import React from 'react';

const Select = ({name, label, error, options, ...rest}) => {
    return ( 
        <div className="form-group">
            <select {...rest} name={name} id={name} className="form-control ad-input">
                <option value="0" defaultValue>{label}</option>
                {options.map(option => <option value={option.key} key={ option.value ? option.value.replace(' ','') : ''}>{option.value}</option>)}
            </select>
            {error && <div className="alert alert-danger errnotice">{error}</div>}
        </div>
     );
}
 
export default Select;