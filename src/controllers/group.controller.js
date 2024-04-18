import groupService from "../services/group.service.js";

const getAll = (req, res) => {
  const groups = groupService.getAll();
  res.json(groups);
};

const get = (req, res) => {
  const groupId = parseInt(req.params.id);
  const group = groupService.getById(groupId);
  if (group == null || group == undefined) {
    res.status(404);
    return;
  }
  res.status(200).json(group);
};

const create = (req, res) => {
  const newGroup = req.body;
  if (!newGroup?.color) {
    newGroup.color = "#d81b73";
  }
  if (newGroup?.name && newGroup?.name.length > 30) {
    return res.status(400).json({
      message: "maximo 30 caracteres",
    });
  } else if (!newGroup?.name) {
    return res.status(400).json({ message: "El grupo debe tener un nombre" });
  }
  console.log(req.body);
  const createGroup = groupService.create(newGroup);
  if (!createGroup) {
    return res.status(400).json({ message: "Ocurrio un error" });
  }
  res.status(201).json(createGroup);
};

const update = (req, res) => {
  const groupUpdate = req.body;
  const createGroup = groupService.update(groupUpdate);
  if (createGroup === null) {
    return res.status(400).json({ message: "Ocurrio un error" });
  }
  res.status(200).json(createGroup);
};

const del = (req, res) => {
  const groupId = parseInt(req.params.id);
  const group = groupService.delete(groupId);
  if (group) {
    return res.status(200).json({ message: "Se ha eliminado el grupo" });
  } else {
    return res
      .status(400)
      .json({ message: "Ocurrio un error al eliminar el grupo" });
  }
};

export default {
  getAll,
  get,
  create,
  update,
  delete: del,
};
