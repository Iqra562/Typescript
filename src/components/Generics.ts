// Generics Functions 
// Generics allow to write reusable, type-safe code by using type parameters instead of fixed types.
// They let the caller decide the type, while TypeScript ensures consistency.

function wrapInArray<T>(item:T):T[]{
    return [item]
}

wrapInArray("user")
wrapInArray(2312313)
wrapInArray({user:"user"})


function pair<A,B>(a:A,b:B):[A,B]{
    return [a,b]
}

pair("abc",2)
pair(2,'abc')

// generic interface  
interface Box<T>{
content:T
}

const numberBox : Box<number> = {content:2}
const numberBox2 : Box<string> = {content:'hello'}

interface ApiPromise<T>{
    status:number,
    data:T
}

const res:ApiPromise<{flavor:string}> = {
status:200,
data:{flavor:"abc"}
}