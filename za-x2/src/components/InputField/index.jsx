import React from 'react';

const InputField = ({ type = 'text', placeholder, name, error, touched, ...rest }) => {
    const inputClassName = `border-[#9D94FE] font-spaceGrotesk placeholder:font-spaceGrotesk border-[2px] text-xl text-[#9d94fe] placeholder:text-[#9d94fe] p-2 w-[320px] rounded-md h-[50px] bg-[#0F110F] ${
        !error && touched ? 'border-[pink] text-[pink]' : error && touched ? 'border-[#ff0000]' : 'border-[#9D94FE]'
    }`;

    return (
        <>
            <input id={name} className={inputClassName} type={type} placeholder={placeholder} name={name} {...rest} />
            {error && touched ? <p className="text-[#ff0000] absolute text-[10px] pt-2 pl-1">{error}</p> : null}
        </>
    );
};

export default InputField;
