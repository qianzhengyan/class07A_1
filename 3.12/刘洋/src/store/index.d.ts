interface AddItem{
    type:string;
    str:string;
    id:number;
}
interface Delitam{
    type:string;
    id:number;
}
export type Todo= AddItem | Delitam