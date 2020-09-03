CREATE TABLE IF NOT EXISTS STATISTIC (
    stat_id INT AUTO_INCREMENT PRIMARY KEY,
    telegram_user_id_fk INT NOT NULL,
    CONSTRAINT telegram_user_id_fk FOREIGN KEY (telegram_user_id_fk) REFERENCES USER(telegram_user_id) ON DELETE CASCADE,
    category VARCHAR(30) NOT NULL,
    amount_of_money INT NOT NULL,
    type_of_currency VARCHAR(10) NOT NULL,
    day_ VARCHAR(15) NOT NULL,
    month_ VARCHAR(15) NOT NULL,
    year_ VARCHAR(15) NOT NULL
)