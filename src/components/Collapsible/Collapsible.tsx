import React, { ReactNode, useState } from 'react'
import "./Collapsible.css";

type Props = {
    title: string,
    children: ReactNode
}
export default function Collapsible({ title, children }: Props) {
    const [showChildren, setShowChildren] = useState<Boolean>(true);
    return (
        <div className='collapsible'>
            <div className="title" onClick={() => setShowChildren(!showChildren)}>{title}</div>
            {showChildren && <div className='children'>{children}</div>}
        </div>
    )
}
