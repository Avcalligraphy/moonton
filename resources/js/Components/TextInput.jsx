import { forwardRef, useEffect, useRef } from 'react';
import "../../css/input.css";
export default forwardRef(function TextInput({ type = 'text', name, className, variant = 'primary', autoComplete, required, isFocused, placeholder, isError , ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            name={name}
            className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${
                isError && "input-error"
            } input-${variant} ${className} `}
            ref={input}
            autoComplete={autoComplete}
            required={required}
            placeholder={placeholder}
        />
    );
});
