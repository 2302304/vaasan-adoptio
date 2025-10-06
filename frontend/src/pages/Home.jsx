import AnimalCard from "../components/AnimalCard";

// Mock-data tähän vaiheeseen:
const mockAnimals = [
  { id: 1, name: "Rex", type: "koira", age: 3, image_url: "" },
  { id: 2, name: "Misu", type: "kissa", age: 2, image_url: "" },
  { id: 3, name: "Lintu", type: "lintu", age: 1, image_url: "" },
];

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Adoptoitavat eläimet</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {mockAnimals.map(animal => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}
