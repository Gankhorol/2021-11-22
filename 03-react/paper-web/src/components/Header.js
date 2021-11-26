export default function Header({ title, count, hobbies, person }) {
    return (
        <div
            style={{
                textAlign: "center",
                border: "1px solid black",
                padding: "1rem",
                margin: "1rem",
            }}
        >
            Header, {title}
        </div>
    );
}
