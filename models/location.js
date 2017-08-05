module.exports = function(sequelize, DataTypes) {
	var Location = sequelize.define("Location", {

		locate_name: {
			type: DataTypes.STRING,
			alllowNull: false,
			validate: {
				len: [1]
			}
		},

		street: {
			type: DataTypes.STRING,
			alllowNull: false,
			validate: {
				len: [1]
			}
        },
        
        city: {
			type: DataTypes.STRING,
			alllowNull: false,
			validate: {
				len: [1]
			}
        },
        
        state: {
			type: DataTypes.STRING,
			alllowNull: false,
			validate: {
				len: [1]
            }
		}, 
		
		zip_code: {
			type: DataTypes.TEXT,
			alllowNull: false,
			validate: {
				len: [1]
			}
		},

		phone_num: {
			type: DataTypes.TEXT,
			alllowNull: false,
			validate: {
				len: [1]
			}
		},

		 bought: {
            type: DataTypes.STRING,
            allowNull: false,
            isDate: true, 
            
        },

        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            isDecimal: true,

        }

	});

	return Location;
};
