import { HiOutlineSearch } from "react-icons/hi";
import { useContext} from "react";
import InputContext from "../context/InputContext";
import "../App.css"
const Form = ()=>{
    const helper = useContext(InputContext);
    return (
        <div className="inputText" >
               <input type="text" placeholder="Search for meals or keywords" value={helper.keyword} onChange={
                   (e)=>{
                    helper.setKeyword(e.target.value);
                   }
               }/>
              <button className="search-button" onClick={()=>{
                    if(helper.keyword === ''){
            alert("please enter a key");
        }else{
                  helper.setSearchMode(true);
                  helper.setShuffleMode(false);
                  helper.searchEngine()
        }
              }}><HiOutlineSearch/></button>
        </div>
    )
}

export default Form;