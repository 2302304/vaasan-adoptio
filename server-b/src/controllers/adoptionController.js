// Mock-tietokanta
let adoptions = [];

export const createAdoption = (req, res) => {
  const { animal_id, applicant_name, email, phone, message } = req.body;

  if (!animal_id || !applicant_name || !email) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const newAdoption = {
    id: adoptions.length + 1,
    animal_id,
    applicant_name,
    email,
    phone,
    message,
    created_at: new Date().toISOString()
  };

  adoptions.push(newAdoption);
  console.log("New adoption received:", newAdoption);

  res.status(201).json({
    message: "Adoption request saved successfully ✅",
    adoption: newAdoption
  });
};
