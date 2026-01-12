import type { ListItems } from "../types";
import { Card } from "./Card";
 

interface ListProps {
    items:ListItems[]
}


export function List({items} : ListProps){
    return(
        <div>
{
    items.map((i)=>(
<Card key={i.id} name={i.name} price={i.price}/>
    ))
}        </div>
    )
}

