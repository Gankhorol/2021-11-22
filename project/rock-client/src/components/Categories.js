const data = [
    { id: 1, name: "Улс төр", color: "is-info" },
    { id: 2, name: "Эдийн засаг", color: "is-success" },
    { id: 3, name: "Спорт", color: "is-warning" },
    { id: 3, name: "Дэлхий", color: "is-link" },
    { id: 3, name: "Шар мэдээ", color: "is-primary" },
    { id: 3, name: "Шар мэдээ", color: "is-danger" },
];

export default function Categories() {
    return (
        <div className="buttons">
            {data.map((category) => (
                <button key={category.id} className={`button ${category.color}`} style={{ flexGrow: 1 }}>
                    {category.name}
                </button>
            ))}
        </div>
    );
}
