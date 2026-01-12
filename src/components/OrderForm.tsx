import { useState } from "react";


interface OrderFormProps{
    onSubmit(order:{name:string;order:number}):void;
}

export function OrderForm({onSubmit}:OrderFormProps){
    const [name, setName ] = useState<string>("product");
    const [order, setOrder] = useState<number>(1);

    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
e.preventDefault();
onSubmit({name,order})
    }
return(
    <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)} />
        <input type="number" value={order} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setOrder(Number(e.target.value)|| 0)} />
            <button type="submit">submit</button>
    </form>
)
}