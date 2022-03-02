import { useContext } from "react";
import InputContext from "../context/InputContext";
import "../App.css"
const Shuffle = ()=>{
    const contextInput = useContext(InputContext);
    return(
        <button className="shuff-button" onClick={()=>{
           contextInput.setSearchMode(false);
           contextInput.setShuffleMode(true);
            contextInput.searchEngine()
        }}>shuffle</button>
    )
}

export default Shuffle;