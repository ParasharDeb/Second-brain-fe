import { Shareicon } from "../icons/shareicon";
import { Trashicon } from "../icons/trashicon";
import { Youtubeicon } from "../icons/Yourubeicon";


interface Cardprops {
    title: string;
    link: string;
    type: "twitter" | "youtube";
}

const extractYouTubeId = (url: string): string | null => {
    const regex = /(?:youtube\.com.*[?&]v=|youtu\.be\/|youtube\.com\/live\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
};

export const Cardcomponent = (props: Cardprops) => {
    return (
        
        <div className="bg-white max-w-72 m-10 rounded-xl min-h-56">
            <div className="flex justify-between pt-3 px-3">
                <div className="flex items-center">
                    <a href={props.link} target="_blank">
                    <div ><Youtubeicon varient="sm"/></div>
                    </a>
                     <div className="text-sm pl-3">{props.title}</div>
                </div>
                <div className="flex text-gray-600 items-center">
                    <div className="pr-3"><Trashicon /></div>
                    <div><Shareicon /></div>
                </div>
            </div>

            <div>
                {props.type === "youtube" && (
                    <iframe
                        className="px-3 w-full pt-3"
                        src={`https://www.youtube.com/embed/${extractYouTubeId(props.link)}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                )}

                {props.type === "twitter" && (
                    <div
                        className="px-3 pt-3"
                        dangerouslySetInnerHTML={{
                            __html: `<blockquote class="twitter-tweet"><a href="${props.link}"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,
                        }}
                    />
                )}
            </div>
        </div>
    );
};
