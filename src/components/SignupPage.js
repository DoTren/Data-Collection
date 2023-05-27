import React, { useState } from "react";
import "./SignupPage.css";
import FileUploader from "./FileUploader";

const SignupPage = ({ setUser }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleHeightChange = (event) => {
        setHeight(event.target.value);
    };

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleProceed = (e) => {
        e.preventDefault();

        setUser({ name, age, height, weight });
    };

    return (
        <div className="container">
            <h1>
                <img src="/images/ares.png" alt="" />
            </h1>
            <form>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <label>Age:</label>
                    <input type="text" value={age} onChange={handleAgeChange} />
                </div>
                <div>
                    <label>Height:</label>
                    <input
                        type="text"
                        value={height}
                        onChange={handleHeightChange}
                    />
                </div>
                <div>
                    <label>Weight:</label>
                    <input
                        type="text"
                        value={weight}
                        onChange={handleWeightChange}
                    />
                </div>
                <div className="upload__btn">
                    <FileUploader name="Upload Blood Reports" />
                    <FileUploader name="Upload Insulin Reports" />
                </div>
                <button className="btn" type="button" onClick={handleProceed}>
                    Proceed to Questionnaire
                </button>
            </form>
        </div>
    );
};

export default SignupPage;
