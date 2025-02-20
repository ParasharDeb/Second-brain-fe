import { Brainlyicon } from "../icons/Brainlyicon"
import { Docsicons } from "../icons/docsicons"
import { Linksicons } from "../icons/linksicons"
import { Signouticon } from "../icons/Singouticon"
import { Tagsicons } from "../icons/tagsicon"
import { Twittericon } from "../icons/twittericon"
import { Youtubeicon } from "../icons/Yourubeicon"
import { Button } from "./Button"

export const Sidebar = () => {
    return (
        <div className="bg-white absolute left-0 fixed border-r h-screen w-56 top-0 text-gray-500" >
            <div className="pl-4 ">
            <div className="flex items-center py-4 ">
                <div><Brainlyicon/></div>
                <div className="text-2xl font-bold text-black ">Brainly</div>
            </div>
            <div className="flex items-center py-4 pl-4 cursor-pointer">
                <div><Twittericon /></div>
                <div className="text-lg pl-5 ">Twitter</div>
            </div>
            <div className="flex items-center py-4 pl-4 cursor-pointer">
                <div><Youtubeicon varient="lg" /></div>
                <div className="text-lg pl-4 ">Youtube</div>
            </div>
            <div className="flex items-center py-4 pl-4 cursor-pointer">
                <div><Docsicons/></div>
                <div className="text-lg pl-5 ">Documents</div>
            </div>
            <div className="flex items-center py-4 pl-4 cursor-pointer">
                <div><Linksicons/></div>
                <div className="text-lg pl-6 ">Links</div>
            </div>
            <div className="flex items-center py-4 pl-4 cursor-pointer">
                <div><Tagsicons/></div>
                <div className="text-lg pl-5 ">Tags</div>
            </div>
            <div className="items-center py-10 pl-4">
                <Button text="Sign Out" varient="primary" starticon={<Signouticon/>}/>
            </div>
        </div>

        </div>
    )
}