import { useState } from "react";

export function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);

    const onChange = (e) => {
        console.log("Event:", e);
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        submitHandler(values);
    }

    return {
        values,
        onChange,
        onSubmit, 
    }
}