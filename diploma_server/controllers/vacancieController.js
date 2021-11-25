const { StatusCodes } = require("http-status-codes");
const { vacancieModel, hashTagModel } = require("../models");
const { error, success } = require("../messages");

const getAllVacancies = async (req, res) => {
  const vacancies = await vacancieModel.find({});
  res.json(vacancies).status(StatusCodes.OK);
};

const getVacancieById = async (req, res) => {
  const { id } = req.params;
  try {
    const vacancie = await vacancieModel.findById(id);
    if (!vacancie) {
      res.json({ error: error.DoesNotExist }).status(StatusCodes.NOT_FOUND);
      return;
    }
    res.json(vacancie).status(StatusCodes.OK);
  } catch (e) {
    res.json({ error: error.DoesNotExist }).status(StatusCodes.NOT_FOUND);
  }
};

const getVacancieByIdAndUpdate = async (req, res) => {
  const { id } = req.params;
  try {
    const vacancie = await vacancieModel.findByIdAndUpdate(id, {
      ...req.body
    });
    if (!vacancie) {
      res.json({ error: error.DoesNotExist }).status(StatusCodes.NOT_FOUND);
    }
    res.json({ success: success.Updated }).status(StatusCodes.OK);
  } catch (e) {
    res.json({ error: error.DoesNotExist }).status(StatusCodes.NOT_FOUND);
  }
};

const createVacancie = async (req, res) => {
  try {
    const vacancie = await vacancieModel.create({ ...req.body });
    res.json(vacancie).status(StatusCodes.CREATED);
  } catch (e) {
    res.json({ error: error.CreateError }).status(StatusCodes.BAD_REQUEST);
  }
};

const deleteVacancie = async (req, res) => {
  const { id } = req.params;
  const hashTag = await vacancieModel.findByIdAndDelete(id);
  if (!hashTag) {
    res.json({ error: error.DoesNotExist }).status(StatusCodes.NOT_FOUND);
    return;
  }
  res.json({ success: success.Deleted }).status(StatusCodes.OK);
};

const getAllHashTags = async (req, res) => {
  const hashTags = await hashTagModel.find({});
  res.json(hashTags).status(StatusCodes.OK);
};

const getHashTagByIdAndUpdate = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    const hashTag = await hashTagModel.findByIdAndUpdate(id, { title: title });
    if (!hashTag) {
      res.json({ error: error.DoesNotExist }).status(StatusCodes.NOT_FOUND);
    }
    res.json({ success: success.Updated }).status(StatusCodes.OK);
  } catch (e) {
    res.json({ error: error.DoesNotExist }).status(StatusCodes.NOT_FOUND);
  }
};

const createHashTag = async (req, res) => {
  try {
    const { title } = req.body;
    const hashTag = await hashTagModel.create({ title: title });
    res.json(hashTag).status(StatusCodes.CREATED);
  } catch (e) {
    res.json({ error: error.CreateError }).status(StatusCodes.BAD_REQUEST);
  }
};

const deleteHashTag = async (req, res) => {
  const { id } = req.params;
  const hashTag = await hashTagModel.findByIdAndDelete(id);
  if (!hashTag) {
    res.json({ error: error.DoesNotExist }).status(StatusCodes.NOT_FOUND);
    return;
  }
  res.json({ success: success.Deleted }).status(StatusCodes.OK);
};

module.exports = {
  getAllVacancies,
  getVacancieById,
  createVacancie,
  deleteVacancie,
  getAllHashTags,
  getHashTagByIdAndUpdate,
  createHashTag,
  deleteHashTag,
  getVacancieByIdAndUpdate
};
