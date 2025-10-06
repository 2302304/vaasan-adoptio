// Mock-data - simuloidaan tietokantaa
const animals = [
  { id: 1, name: "Rex", type: "koira", age: 3, breed: "Labradori", image_url: "/images/rex.jpg", description: "Ystävällinen ja energinen" },
  { id: 2, name: "Misu", type: "kissa", age: 2, breed: "Maine Coon", image_url: "/images/misu.jpg", description: "Uteliasta seuraa sohvalla" },
  { id: 3, name: "Lintu", type: "lintu", age: 1, breed: "Aarikka", image_url: "/images/lintu.jpg", description: "Laulaa aamuisin iloisesti" },
];

export const getAllAnimals = (req, res) => {
  res.json(animals);
};

export const getAnimalById = (req, res) => {
  const id = parseInt(req.params.id);
  const animal = animals.find(a => a.id === id);
  if (!animal) {
    return res.status(404).json({ message: "Animal not found" });
  }
  res.json(animal);
};
