// Tänne lisätään myöhemmin API-kutsut backendille
// Esimerkki:
export async function getAnimals() {
  const res = await fetch("http://localhost:3001/animals");
  return await res.json();
}
