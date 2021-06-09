import { useState } from "react";

export const Products = ( { initialValue } ) => {

    const [value, setValue] = useState(initialValue);
    const change = (newTitle) => {
    setValue(newTitle);
    };  

    return [value, change];
}


