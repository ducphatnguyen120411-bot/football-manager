CREATE TABLE IF NOT EXISTS users (
    discord_id VARCHAR(255) PRIMARY KEY,
    balance INT DEFAULT 5000,
    last_gacha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cards (
    card_id INT AUTO_INCREMENT PRIMARY KEY,
    owner_id VARCHAR(255),
    player_name VARCHAR(255),
    rarity VARCHAR(50),
    pac INT, sho INT, pas INT, dri INT, def INT, phy INT,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (owner_id) REFERENCES users(discord_id) ON DELETE CASCADE
);
