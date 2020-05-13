'use strict';
module.exports = (sequelize, DataType) => {
	var Lead = sequelize.define('Lead',{
		id: {
			type: DataType.UUID,
			defaultValue: DataType.UUIDV4,

			allowNull: false,
			primaryKey: true
		},
		email: {
			type: DataType.STRING,
			allowNull: false,
		},
	});
	return Lead;
};