// always call next after
const continueDecorator = (controllerFn) => {
  return async (req, res, next) => {
    try {
      await controllerFn(req, res);
      next();
    } catch (e) {
      console.log("here");
      next(e);
    }
  };
};

export default continueDecorator;
