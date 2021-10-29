import StoryCard from "./StoryCard";

function Stories() {
    const stories = [
        {
            name: 'John Wanjema',
            src: "https://media-exp1.licdn.com/dms/image/C4D03AQGDdM0JVZy4Cg/profile-displayphoto-shrink_200_200/0/1625587335732?e=1640822400&v=beta&t=3BFjo2yU48qmeMLbEJ1XFob9OatL1P9ovQW_MDV_aro",
            profile: "https://media-exp1.licdn.com/dms/image/C4D03AQGDdM0JVZy4Cg/profile-displayphoto-shrink_200_200/0/1625587335732?e=1640822400&v=beta&t=3BFjo2yU48qmeMLbEJ1XFob9OatL1P9ovQW_MDV_aro"
        },
        {
            name: 'Elon Musk',
            src: "https://links.papareact.com/4zn",
            profile: "https://links.papareact.com/kxk"
        },
        {
            name: 'Jeff Bezos',
            src: "https://links.papareact.com/k2j",
            profile: "https://links.papareact.com/f0p"
        },
        {
            name: 'Mark Zuckerberg',
            src: "https://links.papareact.com/xql",
            profile: "https://links.papareact.com/snf"
        },
        {
            name: 'Bill Gates',
            src: "https://links.papareact.com/4u4",
            profile: "https://links.papareact.com/zvy"
        }
    ];

    return (
        <div>
            <div className="flex  justify-center space-x-3 mx-auto">
            {
                stories.map((story,key)=>(
                    // story card
                    <StoryCard key={key} name={story.name} src={story.src} profile={story.profile}/>
                ))
            }
        </div>
        </div>
    )
}

export default Stories
