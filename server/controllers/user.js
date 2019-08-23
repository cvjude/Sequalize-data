import Models from '../db/models';

export const addUser = async (req, res) => {
  const user = await Models.User.create(req.body);
  return res.status(200).json({
    data: user
  });
};

export const findUser = async (req, res) => {
  const { email } = req.body;
  const { all } = req.query;
  const user = all
    ? await Models.User.findAll()
    : await Models.User.findOne({ where: { email } });
  return res.status(200).json({
    data: user
  });
};

export const deleteUser = async (req, res) => {
  const { email } = req.body;
  const user = await Models.User.destroy({ where: { email } });
  return res.status(200).json({
    data: user
  });
};

export const updateUser = async (req, res) => {
  const { email, firstName } = req.body;
  const user = await Models.User.update({ firstName }, { where: { email } });
  return res.status(200).json({
    data: user
  });
};
