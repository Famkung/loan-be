const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('loan', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    reference_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    full_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_card: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    birth_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    job: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    income: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    company: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    experience_years: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    loan_amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    installment_months: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    purpose: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "PENDING"
    }
  }, {
    sequelize,
    tableName: 'loan',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
