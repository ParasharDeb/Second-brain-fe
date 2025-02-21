import { useRef } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Inputcomponent"
import { Siginicon } from "../icons/signinicon"

import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signup = () => {
    const usernameref=useRef<HTMLInputElement>(null)
    const emailref=useRef<HTMLInputElement>(null)
    const passwordref=useRef<HTMLInputElement>(null)
    const navigate=useNavigate();
    const Clickhandler=async()=>{
        const username=usernameref.current?.value;
        const email=emailref.current?.value
        const password=passwordref.current?.value;

        await axios.post("http://localhost:3000/api/v1/signup",{
            
                username,
                password,
                email
        })
        navigate("/signin")
        
    }
    return (
        <div className="bg-slate-100 w-screen h-screen flex justify-center items-center">

            
            <div className="bg-white rounded-3xl border min-w-96 py-10 px-8 flex justify-center items-center shadow-2xl">
                <div>
                    <div className="pl-20 py-2 text-xl font-bold ">Sign Up</div>
                    <div className="py-2"><Input placeholder="Email" ref={emailref}/></div>
                    <div className="py-2"><Input placeholder="Username" ref={usernameref}/></div>
                    <div className="py-2"><Input placeholder="Password" ref={passwordref}/></div>
                    <div className="px-16 py-2"><Button varient="primary" text="Sign up" endicon={<Siginicon/>} onClick={Clickhandler}/>
                    </div>
                </div>
            </div>
        </div>
    )
}