import React, { ReactNode, useState } from 'react'
import "./Collapsible.css";

type Props = {
    title: string,
    children: ReactNode
}
export default function Collapsible({ title, children }: Props) {
    const [showChildren, setShowChildren] = useState<Boolean>(true);
    return (
        <div>
            <h3><span className="title" onClick={() => setShowChildren(!showChildren)}>{title}</span></h3>
            {showChildren && children}
        </div>
    )
}
