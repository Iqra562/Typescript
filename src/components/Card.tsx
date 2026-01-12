interface CardProp{
    name:string;
    price:number;
    isAvailable?: boolean;
}

export function  Card({name,price,isAvailable = false}:CardProp){
    return(
        <article>
<h2 >
    {name}
    </h2>
    {
        isAvailable && <p>Stock available</p>
    }
<p>{price}</p>
        </article>
    )
}