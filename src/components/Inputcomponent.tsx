interface inputprops{
    onChange?:()=>void;
    placeholder:string
}
export const Input=(props:inputprops)=>{
    return(
    <input type="text" placeholder={props.placeholder} className="px-4 py-2 rounded-lg border-2 m-2"/>
    )
}