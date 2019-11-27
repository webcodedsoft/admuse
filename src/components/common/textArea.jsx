import React from 'react';

const TextArea = ({name, label, error, ...rest}) => {
    return ( 
        <div className="form-group">
            <div className="ad-input">
                <textarea {...rest} className="form-control" placeholder={label} name={name} id={name}></textarea>
                {/* <label htmlFor={name}>{label}</label> */}
                {error && <div className="alert alert-danger errnotice">{error}</div>}
            </div>
        </div>
     );
}
 
export default TextArea;