import { useEffect, useState } from "react";

export function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);

    /*useEffect(() => {
        setValues(initialValues);
    }, [initialValues]);*/
    /*useEffect(() => {
        // Only update the state if initialValues change
        if (Object.keys(initialValues).some(key => initialValues[key] !== values[key])) {
            setValues(initialValues);
        }
    }, [initialValues]);*/

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