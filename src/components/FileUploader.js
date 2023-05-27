import React from "react";
import styled from "styled-components";
const Button = styled.button`
    background-color: white;
    color: black;
    border: 1px solid rgba(0, 0, 0, 0.4);
    font-size: 12px;
    width: 40%;
    margin: 0 10px;
    border-radius: 20px;
    margin: 10px auto;
    display: flex;
    justify-content: center;

    &:hover {
        background-color: lightblue;
    }
`;

const FileUploader = (props) => {
    const hiddenFileInput = React.useRef(null);

    const handleClick = (event) => 
    {
        event.preventDefault()
        hiddenFileInput.current.click();
    };

    const handleChange = (event) => {
        // const fileUploaded = event.target.files[0];
        // props.handleFile(fileUploaded);
    };
    return (
        <>
            <Button onClick={handleClick}>{props.name}</Button>
            <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: "none" }}
            />
        </>
    );
};
export default FileUploader;
