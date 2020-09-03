CREATE TABLE IF NOT EXISTS USER (
    telegram_user_id INT PRIMARY KEY,
    user_name VARCHAR(30) NOT NULL,
    UNIQUE(user_name)
)