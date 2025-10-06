CREATE TABLE animals (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  type VARCHAR(50),
  age INT,
  breed VARCHAR(100),
  image_url TEXT,
  status VARCHAR(20) DEFAULT 'available',
  description TEXT
);

INSERT INTO animals (name, type, age, breed, image_url, description)
VALUES
('Bella', 'dog', 3, 'Labrador', 'https://place-puppy.com/200x200', 'Ystävällinen ja energinen.'),
('Misu', 'cat', 2, 'Maine Coon', 'https://placekitten.com/200/200', 'Rauhallinen ja sylikissa.');
