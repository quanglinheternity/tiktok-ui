import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebonceValue] = useState(value);
    useEffect(() => {
        const hanler = setTimeout(() => setDebonceValue(value), delay);

        return () => clearTimeout(hanler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounceValue;
}

export default useDebounce;
