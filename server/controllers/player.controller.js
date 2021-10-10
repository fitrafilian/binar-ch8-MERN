const Player = require("../models/player.model");

module.exports = {
  // Create player
  create: async (req, res) => {
    const { username, email, experience, level } = req.body;
    const dataPlayer = await Player.findOne({ username: username });
    if (!dataPlayer) {
      await Player.insertMany({
        username: username,
        email: email,
        experience: experience,
        level: level,
      })
        .then((response) => {
          res.send({
            message: "success create player",
            data: response,
          });
        })
        .catch((err) => {
          res.send({
            message: "Input data terlebih dahulu",
          });
        });
    } else {
      res.send({
        message: "Username telah digunakan",
      });
    }
  },

  // Read database player
  read: async (req, res) => {
    await Player.find()
      .then((response) =>
        res.send({
          message: "Data player ditemukan",
          data: response,
        })
      )
      .catch((err) =>
        res.send({
          message: "Data player tidak ditemukan",
        })
      );
  },

  // update data player
  update: async (req, res) => {
    const { username, email, experience, level } = req.body;
    await Player.updateOne(
      {
        username: username,
      },
      {
        $set: {
          email: email,
          experience: experience,
          level: level,
        },
      }
    ).then((response) => {
      res
        .send({
          message: "Data berhasil diubah",
        })
        .catch((err) => {
          res.send({
            message: "Data gagal diubah",
          });
        });
    });
  },

  // delete player
  delete: async (req, res) => {
    await Player.deleteOne({ username: req.body.username });
  },

  // search for player
  find: async (req, res) => {
    const { username = null, email = null, experience = null, level = null } = req.body;
    let query = {};
    if (username) {
      query.username = username;
    }
    if (email) {
      query.email = email;
    }
    if (experience) {
      query.experience = experience;
    }
    if (level) {
      query.level = level;
    }
    const players = await Player.find(query);

    if (players) {
      res.send({
        message: "Data player ditemukan",
        status: 200,
        data: players,
      });
    } else {
      res.send({
        message: "Data player tidak ditemukan",
      });
    }
  },
};
