function Button() {
    return <button>Click Me!</button>;
}

function App() {
    return (
        <div>
            <Button />
            <Button />
            <Button />
        </div>
    );
}

/////////////////

function Button2() {
    return <button>Click Me!</button>;
}

function Button2B() {
    return <button>Don't Click Me!</button>;
}

function App2() {
    return (
        <div>
            <Button2 />
            <Button2B />
            <Button2 />
        </div>
    );
}

//////////////////

function Button3(props) {
    const buttonStyle = {
        color: props.color,
        fontSize: props.fontSize + "px",
    };

    return <button style={buttonStyle}>{props.text}</button>;
}

function App3() {
    return (
        <div>
            <Button3 text="Click Me!" color="blue" fontSize={12} />
            <Button3 text="Don't Click Me!" color="red" fontSize={12} />
            <Button3 text="Click Me!" color="blue" fontSize={20} />
        </div>
    );
}

//////////////////

function Button4({ text, color, fontSize }) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px",
    };

    return <button style={buttonStyle}>{text}</button>;
}

function App4() {
    return (
        <div>
            <Button4 text="Click Me!" color="blue" fontSize={12} />
            <Button4 text="Don't Click Me!" color="red" fontSize={12} />
            <Button4 text="Click Me!" color="blue" fontSize={20} />
        </div>
    );
}

///////////////

function Button5({ text = "Click Me!", color = "blue", fontSize = 12 }) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px",
    };

    return <button style={buttonStyle}>{text}</button>;
}

function App5() {
    return (
        <div>
            <Button5 />
            <Button5 text="Don't Click Me!" color="red" />
            <Button5 fontSize={20} />
        </div>
    );
}

////////////////

function Button6({ text, color, fontSize }) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px",
    };

    return <button style={buttonStyle}>{text}</button>;
}

Button6.defaultProps = {
    text: "Click Me!",
    color: "blue",
    fontSize: 12,
};

function App6() {
    return (
        <div>
            <Button6 />
            <Button6 text="Don't Click Me!" color="red" />
            <Button6 fontSize={20} />
        </div>
    );
}

////////////////////

function Button7({
    text = "Click Me!",
    color = "blue",
    fontSize = 12,
    handleClick,
}) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px",
    };

    return (
        <button onClick={handleClick} style={buttonStyle}>
            {text}
        </button>
    );
}

function App7() {
    const handleButtonClick = () => {
        window.location.href = "https://www.google.com";
    };

    return (
        <div>
            <Button7 handleClick={handleButtonClick} />
        </div>
    );
}

/////////////////

function Button8({
    text = "Click Me!",
    color = "blue",
    fontSize = 12,
    handleClick,
}) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px",
    };

    return (
        <button onClick={handleClick} style={buttonStyle}>
            {text}
        </button>
    );
}

function App8() {
    const handleButtonClick = (url) => {
        window.location.href = url;
    };

    return (
        <div>
            <Button8
                handleClick={() =>
                    handleButtonClick("https://www.theodinproject.com")
                }
            />
        </div>
    );
}

export { App, App2, App3, App4, App5, App6, App7, App8 };
