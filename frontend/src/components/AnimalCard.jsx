import { Link } from "react-router-dom";

export default function AnimalCard({ animal }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      borderRadius: "8px",
      width: "200px",
      textAlign: "center"
    }}>
      <img 
        src={animal.image_url || "https://via.placeholder.com/150"}
        alt={animal.name}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3>{animal.name}</h3>
      <p>{animal.type} – {animal.age} v</p>
      <Link to={`/animal/${animal.id}`}>Katso lisää</Link>
    </div>
  );
}
