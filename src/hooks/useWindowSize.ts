import { useState, useEffect } from "react";

export default function useWindowSize() {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [height, setHeight] = useState<number>(window.innerHeight);

    useEffect(() => {
        const captureCoordinates = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        window.addEventListener("resize", captureCoordinates)

        return () => {
            window.removeEventListener("resize", captureCoordinates);
        }
    }, [])


    return { width, height };
}