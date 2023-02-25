import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';



const ChooseSenarioForm = ({setStartLocation, setGameState}) => {

    const INITIAL_STATE = {
        'location': '',
    }

    const [formData, setFormData] = useState(INITIAL_STATE)
    const navigate = useNavigate();


    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        setFormData(INITIAL_STATE)
    }


    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="location" className="col-md-6">Search For a Starting Location: </label>
            <input
                required
                id={formData.location}
                type="text"
                name="location"
                placeholder="location"
                value={formData.location}
                onChange={handleChange}
                className="col-md-6"
            /><br></br><br></br>

            <button>Submit</button>
        </form>
    )
}

export default ChooseSenarioForm;