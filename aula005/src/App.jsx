// uma lista de tarefas, cada objeto tem uma task e um id
const todos = [
    { task: "cortar a grama", id: crypto.randomUUID() },
    { task: "trabalhar nos projetos do Odin", id: crypto.randomUUID() },
    { task: "alimentar o gato", id: crypto.randomUUID() },
];

export function TodoList() {
    return (
        <ul>
            {todos.map((todo) => (
                // aqui estamos usando o id gerado como key
                <li key={todo.id}>{todo.task}</li>
            ))}
        </ul>
    );
}

///////////////////

const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
];

export function MonthList() {
    return (
        <ul>
            {/* aqui usamos o índice como key */}
            {months.map((month, index) => (
                <li key={index}>{month}</li>
            ))}
        </ul>
    );
}

////////////

const todo = [
    { task: "cortar a grama", id: crypto.randomUUID() },
    { task: "projetos Odin", id: crypto.randomUUID() },
    { task: "alimentar o gato", id: crypto.randomUUID() },
];

export function TodoList2() {
    return (
        <ul>
            {todo.map((todo) => (
                <li key={todo.id}>{todo.task}</li>
            ))}
        </ul>
    );
}
