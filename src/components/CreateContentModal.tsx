import { Closeicon } from "../icons/closeicon"
 import { Button } from "./Button"
 import { Input } from "./Inputcomponent"
interface CreateContentModalprops{
    open:boolean;
    onClose:()=>void
}
export const CreateContentModal=(props:CreateContentModalprops)=>{
    return(
        <>
        {props.open && <div className="fixed inset-0  bg-white bg-opacity-30 backdrop-blur-sm ">
            <div className="flex justify-center translate-y-48 ">
                <span className="bg-white px-8 py-4 rounded-xl">
                    <div className="flex justify-end cursor-pointer" onClick={props.onClose} ><Closeicon/></div>
                    <div><Input placeholder="Title"/></div>
                    <div ><Input placeholder="Link"/></div>
                    <div ><Input placeholder="Type"/></div>
                    <div className="flex justify-center"><Button varient="primary" text="Add"  onClick={props.onClose}/></div>
                </span>
            </div>        
        </div>}
        </>
    ) 
}

