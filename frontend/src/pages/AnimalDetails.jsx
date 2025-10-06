import { useParams, Link } from "react-router-dom";

export default function AnimalDetails() {
  const { id } = useParams();

  // Mockattu eläin (myöhemmin haetaan backendistä)
  const animal = {
    id,
    name: "Rex",
    type: "koira",
    age: 3,
    breed: "Labradorinnoutaja",
    description: "Ystävällinen ja leikkisä koira.",
    image_url: ""
  };

  return (
    <div style={{ padding: "20px" }}>
      <img
        src={animal.image_url || "https://via.placeholder.com/300"}
        alt={animal.name}
        style={{ width: "300px", borderRadius: "8px" }}
      />
      <h2>{animal.name}</h2>
      <p>Tyyppi: {animal.type}</p>
      <p>Ikä: {animal.age}</p>
      <p>Rotu: {animal.breed}</p>
      <p>Kuvaus: {animal.description}</p>

      <Link to="/thankyou">
        <button style={{ marginTop: "20px" }}>Adoptoi minut</button>
      </Link>
    </div>
  );
}
