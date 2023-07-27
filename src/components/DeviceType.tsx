import React from 'react'
import useWindowSize from '../hooks/useWindowSize';
import { ScreenSizes } from '../models/screenSize';

export default function DeviceType() {
    const { width, height } = useWindowSize();

    const screenSizes: ScreenSizes = [
        {
            width: 576,
            type: 'X-Small',
            description: 'portrait phones'
        },
        {
            width: 768,
            type: 'Small',
            description: 'landscape phones'
        },
        {
            width: 992,
            type: 'Medium',
            description: 'tablets'
        },
        {
            width: 1200,
            type: 'Large',
            description: 'desktops'
        },
        {
            width: 1400,
            type: 'X-Large',
            description: 'large desktops'
        },
        {
            width: 1400,
            type: 'X-Large',
            description: 'larger desktops'
        },
    ]

    return (
        <div>
            <h3>Device Type</h3>
            {width} x {height} pixels
        </div>
    )
}
