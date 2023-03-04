const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const GameRoute = express.Router();
const bcrypt = require("bcrypt");
const { GameModel } = require("../Models/Games.Model");
const shortid = require("shortid");

GameRoute.get("/", async (req, res) => {
  let gameId=req.query.q
  console.log(req.headers.authorization)
  try {
    const data = await GameModel.findOne({gameId});
    res.status(201).json({ data: data });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

GameRoute.post("/newGame", async (req, res) => {
  const payload = req.body;
  //  const payload={
  //     "name": "Sumit6675",
  //     "userId": "fw20_0284_6675"
  //   }
  const generateUniqueID = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };
  const id = generateUniqueID();
  try {
    const Game = new GameModel({
      gameId: id,
      playerFirstUserName: payload.name,
      playerFirstUserId: payload.userId,
      playerFirstScore: 30,
    });
    await Game.save();
    res.status(201).json({ message: `New Game Generated of game id ${id}`,id });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

GameRoute.patch("/addSeconPlayer", async (req, res) => {
  const payload = req.body;
  //  const payload= {
  //     "gameId":"h0Ta&6",
  //     "name": "Roshan6675",
  //     "userId": "fw20_0845_6675"
  //   }
  try {
    const data = await GameModel.findOne({ gameId: payload.gameId });
    data.playerSecondUserName = payload.name;
    data.playerSecondUserId = payload.userId;
    data.playerSecondScore = 30;
    await data.save();
    res.status(201).json({ message: `Second player added in the game` });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

GameRoute.patch("/rightAnswer", async (req, res) => {
  const payload = req.body;
  //  const payload= {
  //     "gameId":"h0Ta&6",
  //     "userId": "fw20_0845_6675"
  //   }
  try {
    const data = await GameModel.findOne({
      gameId: payload.gameId,
    });
    if (data.playerFirstUserId === payload.userId) {
      data.playerFirstScore = data.playerFirstScore + 10;
      await data.save();
    } else {
      data.playerSecondScore = data.playerSecondScore + 10;
      await data.save();
    }
    res.status(201).json({ message: `Correct Answer` });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

GameRoute.patch("/wrongAnswer", async (req, res) => {
  const payload = req.body;
  //  const payload= {
  //     "gameId":"h0Ta&6",
  //     "userId": "fw20_0845_6675"
  //   }
  try {
    const data = await GameModel.findOne({
      gameId: payload.gameId,
    });
    if (data.playerFirstUserId === payload.userId) {
      data.playerFirstScore = data.playerFirstScore - 10;
      await data.save();
    } else {
      data.playerSecondScore = data.playerSecondScore - 10;
      await data.save();
    }
    res.status(201).json({ message: `Wrong Answer` });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

GameRoute.patch("/gameWinner", async (req, res) => {
  const payload = req.body;
  //  const payload= {
  //     "gameId":"h0Ta&6",
  //   }
  try {
    const data = await GameModel.findOne({
      gameId: payload.gameId,
    });
    if (data.playerFirstScore > data.playerSecondScore) {
      data.winner = data.playerFirstUserName;
      await data.save();
    } else if(data.playerFirstScore < data.playerSecondScore) {
      data.winner = data.playerSecondUserName;
      await data.save();
    }else{
        data.winner = "draw";
      await data.save();
    }
    res.status(201).json({ message: `Winner Updated` });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

module.exports = {
  GameRoute,
};
