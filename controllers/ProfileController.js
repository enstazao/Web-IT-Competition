const Profile = require("../models/ProfileModel");

module.exports.addProfile = (req, res) => {
  const { username, profession, gender, location, userId } = req.body;
  try {
    const profile = Profile.create({
      username,
      profession,
      gender,
      location,
      user: userId
    });
    return res.status(200).json({ msg: "Profile Added" });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
};
