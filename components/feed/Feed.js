import InputBox from "./InputBox"
import Stories from "./stories/Stories"

function Feed() {
    return (
        <div className='h-screen pb-44 pt-6'>
            <Stories/>
            <InputBox/>
        </div>
    )
}

export default Feed
