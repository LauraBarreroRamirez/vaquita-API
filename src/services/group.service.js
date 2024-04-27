import { Model } from "../lib/model.js";

const model = Model();
console.log("model");

const getAll = () => {
  console.log("pase por acá getAll");
  const orderGroups = model.getAll().sort(function (a, b) {
    if (a.id < b.id) {
      return 1;
    }
    if (a.id > b.id) {
      return -1;
    }
  });
  return orderGroups;
};

const getById = (id) => {
  console.log("pase por acá getById");
  const foundGroup = model.getById(id);

  return foundGroup;
};

const create = (newGroup) => {
  console.log("se esta creando el grupo");

  const alreadyThere = model.getByName(newGroup.name);

  console.log(newGroup.name);
  console.log(alreadyThere);
  if (alreadyThere) {
    return false;
  }
  const group = model.create(newGroup);
  console.log(newGroup);

  return group;
};

const update = (group) => {
  const groupUpdate = model.update(group.id, group);
  if (groupUpdate) {
    return group;
  } else {
    return null;
  }
};

const del = (id) => {
  console.log("delete");
  return model.delete(id);
};

export default {
  getAll,
  getById,
  create,
  update,
  delete: del,
};
