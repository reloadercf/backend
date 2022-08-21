/* eslint-disable import/prefer-default-export */
import User from '../models/User.js';
import idGenerator from '../helpers/idGenerator.js';

export const users = (req, res) => {
  res.json({ msg: 'desde API' });
};

export const signin = async (req, res) => {
  const { email } = req.body;
  const previewUser = await User.findOne({ email });

  if (previewUser) {
    const error = new Error('Usuario ya registrado');
    return res.status(400).json({ msg: error.message });
  }

  try {
    const user = new User(req.body);
    user.token = idGenerator();
    const userAdd = await user.save();
    res.json(userAdd);
  } catch (error) {
    console.log(error);
  }
};
