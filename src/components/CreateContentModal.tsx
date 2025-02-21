import { useRef } from "react";
import { Closeicon } from "../icons/closeicon"
 import { Button } from "./Button"
 import { Input } from "./Inputcomponent"
import axios from "axios";
interface CreateContentModalprops{
    open:boolean;
    onClose:()=>void
}
export const CreateContentModal=(props:CreateContentModalprops)=>{
    const titleref=useRef<HTMLInputElement>(null);
    const Linkref=useRef<HTMLInputElement>(null)
    const Typeref=useRef<HTMLInputElement>(null)
    const Clickhandler=async()=>{
        const Title=titleref.current?.value;
        const Link=Linkref.current?.value;
        const Type=Typeref.current?.value;
        await axios.post("http://localhost:3000/api/v1/content",{
            Title,
            Link,
            Type
        },{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })
        const resposnse= axios.get("http://localhost:3000/api/v1/content",{
            
        })
    }
    return(
        <>
        {props.open && <div className="fixed inset-0  bg-white bg-opacity-30 backdrop-blur-sm ">
            <div className="flex justify-center translate-y-48 ">
                <span className="bg-white px-8 py-4 rounded-xl">
                    <div className="flex justify-end cursor-pointer" onClick={props.onClose} ><Closeicon/></div>
                    <div><Input placeholder="Title" ref={titleref}/></div>
                    <div ><Input placeholder="Link" ref={Linkref}/></div>
                    <div ><Input placeholder="Type" ref={Typeref}/></div>
                    <div className="flex justify-center"><Button varient="primary" text="Add"  onClick={Clickhandler} /></div>
                </span>
            </div>        
        </div>}
        </>
    ) 
}

