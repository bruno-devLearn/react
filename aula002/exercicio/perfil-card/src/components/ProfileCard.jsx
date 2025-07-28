export function ProfileCard({ people }) {
    return (
        <main>
            <h2>Nome: {people.nome}</h2>
            <p>Bio: {people.bio} </p>
            <img
                src={people.src}
                alt={`Foto de ${people.nome}`}
                width="250px"
            />
        </main>
    );
}
