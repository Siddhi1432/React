import { useState } from "react";

function MoodTracker(){
    const [mood, setMood] = useState({ emoji:"😊", message:"Feeling Neutral"})

    return(
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2 style={{fontSize: "40px"}}>Current mood: {mood.emoji} - {mood.message}</h2>
            <button onClick={()=> setMood({ emoji:"😄",message:"Feeling Happy Today!"})}>Happy</button>
            <button onClick={()=> setMood({ emoji:"😢",message:"Feeling Sad"})}>Sad</button>
            <button onClick={()=> setMood({ emoji:"🤩",message:"Feeling Excited"})}>Excited</button>
            <button onClick={()=> setMood({ emoji:"😴",message:"Feeling Tired"})}>Tired</button>
            <button onClick={()=> setMood({ emoji:"👩‍💻",message:"In Coding Mood"})}>Coding Mood</button>
            <br />
            <button onClick={()=> setMood({ emoji:"😊",message:"Feeling Neutral"})}>Reset</button>
        </div>
    )
}

export default MoodTracker