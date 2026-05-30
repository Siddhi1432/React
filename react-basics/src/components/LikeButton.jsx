import { useState } from "react";

function LikeButton(){
    const [like, setLike] = useState(0)

    return(
        <div>
            <h2>Likes : {like}</h2>
            <button onClick={() => setLike(like+1)}>Like</button>
        </div>
    )
}

export default LikeButton