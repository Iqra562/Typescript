import axios from "axios";
import type { AxiosResponse } from "axios";

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchData = async () => {
    try {
        const response: AxiosResponse<Todo> = await axios.get('https://jsonplaceholder.typicode.com/todos')
        console.log(response.data)
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.log("Axios error", error.message);
            if (error.response) {
                console.log(error.response.status)
            }
        }
    }
}

// axios.get('https://jsonplaceholder.typicode.com/todos')
// .then((res)=>{
// console.log(res.data)
// })