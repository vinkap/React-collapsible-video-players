import React from 'react'
import useWindowSize from '../../hooks/useWindowSize'

export default function WindowSizeDisplay() {
    const { width, height } = useWindowSize();

    return (
        <div>
            <h3>Window Size</h3>
            {width} x {height} pixels
        </div>
    )
}
