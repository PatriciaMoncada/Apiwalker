import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Form = () => {
    const [category, setCategory] = useState('');
    const [id, setId] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}`);
        //navigate ("/" + category + "/" + id);
    }

    return(
        <div> 
            <form onSubmit={handleSubmit}>
                <label>Search for:</label>
                <select defaultValue={"DEFAULT"} onChange={(e) => setCategory(e.target.value)}>
                    <option value="DEFAULT" disabled>Select one</option>
                    <option value="people" >People</option>
                    <option value="planets">Planets</option>
                </select>
                <label>ID:</label>
                <input type="text" onChange={(e) => setId(e.target.value)}></input>
                <input type="submit" value="search"/>
            </form>
        </div>
    );
}

export default Form;