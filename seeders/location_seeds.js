const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.JAWSDB_URL);

sequelize.query('DROP TABLE IF EXISTS Locations');

sequelize.query('INSERT INTO locations ( locate_name, street, city, state, zip_code ) VALUES ("Home", "9 Floral Ave", "Charlotte", "NC", "28212")');
sequelize.query('INSERT INTO locations ( locate_name, street, city, state, zip_code ) VALUES ("Beach House", "23 Sandy Beach Circle", "Nags Head", "NC", "28000")');
sequelize.query('INSERT INTO locations ( locate_name, street, city, state, zip_code) VALUES ("Office", "8877 Working Hard Crt", "Charlotte", "NC", "28206")');
