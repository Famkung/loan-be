'use strict'

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('loan', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    reference_code: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    full_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    id_card: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    birth_date: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    job: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    income: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    company: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    experience_years: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    loan_amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    installment_months: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    purpose: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'PENDING',
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('loan');
}
