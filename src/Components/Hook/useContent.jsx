import { useState } from "react";

export const useContent = () => {
    const [count, setCount] = useState(1);

    return { count, setCount }
}
