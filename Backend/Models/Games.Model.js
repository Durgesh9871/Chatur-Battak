const mongoose = require("mongoose");
const gameSchema = mongoose.Schema({
  gameId: String,
  playerFirstUserName: String,
  playerFirstUserId: String,
  playerFirstScore: Number,
  playerSecondUserName: String,
  playerSecondUserId: String,
  playerSecondScore: Number,
  winner: String,
});

const GameModel = mongoose.model("game", gameSchema);
module.exports = {
  GameModel,
};
