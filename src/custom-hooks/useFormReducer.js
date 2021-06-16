import { useReducer } from "react";

export const useFormReducer = (defaultValue) => {
    const formReducer = (state, e) => {
        if (e.reset) {
            return defaultValue;
        }
        return {
            ...state,
            [e.name]: e.value,
        };
    };

    const [formData, setFormData] = useReducer(formReducer, defaultValue);

    return [formData, setFormData];
};
