function ListItem(props) {
    return <li>{props.animal}</li>;
}

function List(props) {
    return (
        <ul>
            {props.animals.map((animal) => {
                return <ListItem key={animal} animal={animal} />;
            })}
        </ul>
    );
}

function App() {
    const animals = ["Leão", "Vaca", "Cobra", "Lagarto"];

    return (
        <div>
            <h1>Animais: </h1>
            <List animals={animals} />
        </div>
    );
}

//////////////////

function List2(props) {
    return (
        <ul>
            {props.animals.map((animal) => {
                return animal.startsWith("L") ? (
                    <li key={animal}>{animal}</li>
                ) : null;
            })}
        </ul>
    );
}

function App2() {
    const animals = ["Leão", "Vaca", "Cobra", "Lagarto"];

    return (
        <div>
            <h1>Animais: </h1>
            <List2 animals={animals} />
        </div>
    );
}

///////////////////

function List3(props) {
    return (
        <ul>
            {props.animals.map((animal) => {
                return animal.startsWith("L") && <li key={animal}>{animal}</li>;
            })}
        </ul>
    );
}

function App3() {
    const animals = ["Leão", "Vaca", "Cobra", "Lagarto"];

    return (
        <div>
            <h1>Animais: </h1>
            <List3 animals={animals} />
        </div>
    );
}

////////////////////

function List4(props) {
    if (!props.animals) {
        return <div>Carregando...</div>;
    }

    if (props.animals.length === 0) {
        return <div>Não há animais na lista!</div>;
    }

    return (
        <ul>
            {props.animals.map((animal) => {
                return <li key={animal}>{animal}</li>;
            })}
        </ul>
    );
}

function App4() {
    const animals = [];

    return (
        <div>
            <h1>Animais: </h1>
            <List4 animals={animals} />
        </div>
    );
}

//////////////////

function List5(props) {
    if (!props.animals) {
        return <div>Carregando...</div>;
    }

    if (props.animals.length === 0) {
        return <div>Não há animais na lista!</div>;
    }

    return (
        <ul>
            {props.animals.map((animal) => {
                return <li key={animal}>{animal}</li>;
            })}
        </ul>
    );
}

function App5() {
    //const animals = []; // comentei para nao dar erro

    return (
        <div>
            <h1>Animais: </h1>
            <List5 />
        </div>
    );
}

/////////////////////

function List6(props) {
    return (
        <>
            {!props.animals ? (
                <div>Carregando...</div>
            ) : props.animals.length > 0 ? (
                <ul>
                    {props.animals.map((animal) => {
                        return <li key={animal}>{animal}</li>;
                    })}
                </ul>
            ) : (
                <div>Não há animais na lista!</div>
            )}
        </>
    );
}

function App6() {
    const animals = [];

    return (
        <div>
            <h1>Animais: </h1>
            <List6 animals={animals} />
        </div>
    );
}

//////////////////////

// ou

function List7(props) {
    return (
        <>
            {!props.animals && <div>Carregando...</div>}
            {props.animals && props.animals.length > 0 && (
                <ul>
                    {props.animals.map((animal) => {
                        return <li key={animal}>{animal}</li>;
                    })}
                </ul>
            )}
            {props.animals && props.animals.length === 0 && (
                <div>Não há animais na lista!</div>
            )}
        </>
    );
}

function App7() {
    const animals = [];

    return (
        <div>
            <h1>Animais: </h1>
            <List7 animals={animals} />
        </div>
    );
}

export { App, App2, App3, App4, App5, App6, App7 };
