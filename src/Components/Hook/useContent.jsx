import { useState } from "react";

export const useContent = () => {
    const [count, setCount] = useState(0)

    return { count, setCount }
}

