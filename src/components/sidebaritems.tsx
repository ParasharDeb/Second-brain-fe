import { ReactElement } from "react";

interface Sidebarprops{
    varient:"small"|"big"
    name:string;
    starticon:ReactElement;

}
export const Sidebaritems=(props:Sidebarprops)=>{
    return(
        <div className="flex items-center py-4 pl-4 cursor-pointer hover:bg-slate-100 hover:rounded-xl">
                <div>{props.starticon}</div>
                <div className="text-lg pl-5 ">{props.name}</div>
            </div>
    )
    
}