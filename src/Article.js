export default function Article({name, email, dop}) {
    return (
        <>
            <h1>{name}</h1>
            <h3>{email}</h3>
            <h3>{dop}</h3>
        </>
    );
}