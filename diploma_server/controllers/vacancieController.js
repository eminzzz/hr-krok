const { StatusCodes } = require("http-status-codes");
const vacancieModel = require("../models/vacancieModel");
const { DoesNotExist } = require("../messages/vacancies");

const getAllVacancies = async (req, res) => {
  const vacancies = await vacancieModel.find({});
  res.json(vacancies).status(StatusCodes.OK);
};

const getVacancieById = async (req, res) => {
  const { id } = req.params;
  const vacancie = await vacancieModel.findOne({ __id: id });
  if (!vacancie) {
    res.json({ error: DoesNotExist }).status(StatusCodes.NOT_FOUND);
    return;
  }
  res.json(vacancie).status(StatusCodes.OK);
};

module.exports = {
  getAllVacancies,
  getVacancieById,
};
