import groupService from "../services/group.service.js";

console.log("todos los grupos");

const getAll = async (req, res) => {
  console.log("entro a getAll");
  const groups = groupService.getAll();
  res.json(groups);
  console.log("Todos los grupos acá");
};

const get = async (req, res) => {
  const groupId = parseInt(req.params.id);
  const group = groupService.getById(groupId);
  console.log("pase por acá antes");
  if (group == null || group == undefined) {
    res.status(404);
    console.log("pase por acá");
    return;
  }
  console.log("pase por acá despues");
  res.status(200).json(group);
};

const create = async (req, res) => {
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

const update = async (req, res) => {
  const groupUpdate = req.body;
  const createGroup = groupService.update(groupUpdate);
  if (createGroup === null) {
    return res.status(400).json({ message: "Ocurrio un error" });
  }
  res.status(200).json(createGroup);
};

const del = async (req, res) => {
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
