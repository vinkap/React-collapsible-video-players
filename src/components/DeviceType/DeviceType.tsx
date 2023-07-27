import React from 'react'
import useWindowSize from '../../hooks/useWindowSize';

export default function DeviceType() {
    const { deviceLabel } = useWindowSize();

    return (
        <div>
            <h3>Device Type</h3>
            {deviceLabel}
        </div>
    )
}
