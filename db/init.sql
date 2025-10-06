-- Luodaan tietokanta-taulut
CREATE TABLE IF NOT EXISTS animals (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  species VARCHAR(50) NOT NULL,
  age INT NOT NULL,
  description TEXT,
  image_url TEXT
);

CREATE TABLE IF NOT EXISTS adoptions (
  id SERIAL PRIMARY KEY,
  animal_id INT REFERENCES animals(id),
  adopter_name VARCHAR(100),
  adopter_email VARCHAR(100),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Lisätään esimerkkieläimet
INSERT INTO animals (name, species, age, description, image_url) VALUES
('Rex', 'koira', 3, 'Energinen ja ystävällinen koira, tykkää leikkiä pallolla.', '/images/rex.jpg'),
('Misu', 'kissa', 2, 'Rauhallinen sisäkissa, tykkää nukkua auringossa.', '/images/misu.jpg'),
('Lintu', 'lintu', 1, 'Värikäs papukaija, joka osaa muutaman sanan.', '/images/lintu.jpg'),
('Bella', 'koira', 5, 'Lempeä ja rauhallinen noutaja.', '/images/bella.jpg'),
('Nipsu', 'kissa', 4, 'Uteliasta sorttia oleva kissa, joka rakastaa ruokaa.', '/images/nipsu.jpg'),
('Kaneli', 'kani', 1, 'Pieni ruskea kani, joka on tottunut käsittelyyn.', '/images/kaneli.jpg'),
('Muru', 'koira', 6, 'Vanhempi koira, joka nauttii rauhallisista kävelyistä.', '/images/muru.jpg'),
('Siru', 'kissa', 3, 'Leikkisä ja ystävällinen kissa, joka pitää ihmisistä.', '/images/siru.jpg'),
('Jalo', 'lintu', 2, 'Laululintu, jolla on upea ääni.', '/images/jalo.jpg'),
('Hilla', 'koira', 2, 'Iloinen ja sosiaalinen pentu, joka etsii aktiivista kotia.', '/images/hilla.jpg');
