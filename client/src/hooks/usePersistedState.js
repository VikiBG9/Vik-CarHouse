import { useState } from "react";

export default function usePersistedState(key, defaultValue){
    const [state, setState] = useState(() => {
        const persitstedState = localStorage.getItem(key);

        if (persitstedState) {
            return JSON.parse(persitstedState);
        }

        return defaultValue;
    });

    const setPersistedState = (value) => {
        setState(value);

        let serializedValue;
        if (typeof value === 'function') {
            serializedValue = JSON.stringify(value(state));
        } else {
            serializedValue = JSON.stringify(value);
        }

        localStorage.setItem(key, serializedValue);
    };

    return [
        state,
        setPersistedState,
    ];
}