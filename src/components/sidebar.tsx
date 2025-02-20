import { Brainlyicon } from "../icons/Brainlyicon"
import { Docsicons } from "../icons/docsicons"
import { Linksicons } from "../icons/linksicons"
import { Signouticon } from "../icons/Singouticon"
import { Tagsicons } from "../icons/tagsicon"
import { Twittericon } from "../icons/twittericon"
import { Youtubeicon } from "../icons/Yourubeicon"
import { Button } from "./Button"
import { Sidebaritems } from "./sidebaritems"

export const Sidebar = () => {
    return (
        <div className="bg-white absolute left-0 fixed border-r h-screen w-56 top-0 text-gray-500" >
            <div className="pl-4 ">
                <div className="flex items-center py-4 ">
                    <div><Brainlyicon /></div>
                    <div className="text-2xl font-bold text-black ">Brainly</div>
                </div>

                <Sidebaritems varient="small" name="Twitter" starticon={<Twittericon />} />
                <Sidebaritems varient="small" name="Youtube" starticon={<Youtubeicon varient="lg"/>}/>
                <Sidebaritems varient="small" name="Documents" starticon={<Docsicons/>}/>
                <Sidebaritems varient="small" name="Links" starticon={<Linksicons/>}/>
                <Sidebaritems varient="small" name="Tags" starticon={<Tagsicons/>}/>

                <div className="items-center py-10 pl-4">
                    <Button text="Sign Out" varient="primary" starticon={<Signouticon />} />
                </div>
            </div>


        </div>
    )
}