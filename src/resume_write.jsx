function Button({ text = "Click Me!", color = "black", fontSize = 16, handleClick }) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px"
      };
    
    
    return (
        <button onClick={handleClick} style={buttonStyle}>
            {text}
        </button>
    );
}

export default function resumeWriter() {
    const handleButtonClick = () => {
        window.location.href = "http://www.google.com";
    };

    return (
        <div>
            <Button handleClick={handleButtonClick} text = "what?" />
        </div>
    );
}