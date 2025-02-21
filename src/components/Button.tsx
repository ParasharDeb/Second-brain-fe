import { ReactElement } from "react";

interface Buttonprops{
    varient:"primary"| "secondary";
    text:string;
    starticon?:ReactElement;
    endicon?:ReactElement;
    fullWidth?:boolean;
    onClick?:()=>void
}
const varientstyles={
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-200 text-purple-500 "
}


const defaultstyles="px-4 py-2 rounded-lg font-normal flex items-center gap-2"
export const Button=(props:Buttonprops)=>{

    return(
    <button className={varientstyles[props.varient]+" "+defaultstyles + " "+ `${props.fullWidth ? "w-full flex justify-center items-center":" "}` } onClick={props.onClick}>
        {props.starticon}
        {props.text}
        {props.endicon}
    </button>
    )
} ;