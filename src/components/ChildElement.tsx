import type { PropsWithChildren,ReactNode } from "react";


interface CardProps extends PropsWithChildren{
    title:string;
    footer?:ReactNode;
}

// optional props should be listed last in parametres
export function ChildElement({title, children,footer}:CardProps){
    return(
        <section>
            <h2>{title}</h2>
            <div>{children}</div>
            {footer && <footer>{footer}</footer>}
        </section>
    )
}