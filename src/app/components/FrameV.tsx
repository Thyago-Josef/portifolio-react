import React, { ReactNode } from "react";

interface FrameVProps {
    children: ReactNode;
}

export default function FrameV({ children }: FrameVProps) {
    return (
        <div className="frame-v">
            <div className="moldura moldura-superior-esquerda" />
            <div className="moldura moldura-inferior-direita" />
            <div className="conteudo-frame">
                {children}
            </div>
        </div>
    );
}
