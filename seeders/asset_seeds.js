const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.JAWSDB_URL);

sequelize.query('INSERT INTO assets ( itemName, category, make, model, serial_num, bought, price, info, inherit, image) VALUES ("Freezer", "Appliances", "GE", "Frost Free LS", "RT-6789", "2016,11,12", "1200.23", "Has a 3 year warranty. Service 800-555-5656", "Aunt June", "/images/1.jpg")');
sequelize.query('INSERT INTO assets ( itemName, category, make, model, serial_num, bought, price, info, inherit, image) VALUES ("Lisa Laptop", "Electronics", "Apple", "MacBook Pro", "03456-78-0012", "2017,02,18", "1890.23", "Has a 2 year warranty. Service 800-555-5656", "my cat", "images/2.jpg")');
sequelize.query('INSERT INTO assets ( itemName, category, make, model, serial_num, bought, price, info, inherit, image) VALUES ("Painting", "Antiques/Artworks", "Van Gogh", "Starry Night", "1", "1817,02,18", "1100890.23", "Stole it from MOMA, but no one has noticed the forgery.", "bobby jim", "images/3.jpg")');
