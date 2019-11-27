import React from 'react';

const Input = ({name, label, error, ...rest}) => {
    return ( 
        <div className="form-group">
            <div className="ad-input">
                <input {...rest} autoComplete="off" placeholder={label} className="form-control" name={name} id={name}/>
                {error && <div className="alert alert-danger errnotice">{error}</div>}
            </div>
        </div>
     );
}
 
export default Input;