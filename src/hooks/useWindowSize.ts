import { useState, useEffect } from "react";

export default function useWindowSize() {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [height, setHeight] = useState<number>(window.innerHeight);
    const [deviceLabel, setDeviceLabel] = useState<string>('')

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

    useEffect(() => {
        switch(true) {
            case width < 576:
                setDeviceLabel('X-Small: portrait phones')
                break;
            case width < 768:
                setDeviceLabel('Small: landscape phones')
                break;
            case width < 992:
                setDeviceLabel('Medium: tablets')
                break;
            case width < 1200:
                setDeviceLabel('Large: desktops')
                break;
            case width < 1400:
                setDeviceLabel('X-Large: large desktops')
                break;
            default:
                setDeviceLabel('XX-Large: larger desktops')
        }
    }, [width]);

    return { width, height, deviceLabel };
}