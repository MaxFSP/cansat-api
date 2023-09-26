const Log = require("../models/log");

// CRUD Controllers

//get all logs
exports.getLogs = (req, res, next) => {
  Log.findAll()
    .then((logs) => {
      res.status(200).json({ logs: logs });
    })
    .catch((err) => console.log(err));
};

//get log by id
exports.getLog = (req, res, next) => {
  const logId = req.params.logId;
  Log.findByPk(logId)
    .then((log) => {
      if (!log) {
        return res.status(404).json({ message: "Log not found!" });
      }
      res.status(200).json({ log: log });
    })
    .catch((err) => console.log(err));
};

//create log
exports.createLog = (req, res, next) => {
  const weather = req.body.weather;
  const pressure = req.body.pressure;
  const height = req.body.height;
  const co2 = req.body.co2;
  const tvoc = req.body.tvoc;
  const uv = req.body.uv;
  const gps = req.body.gps;

  Log.create({
    weather: weather,
    pressure: pressure,
    height: height,
    co2: co2,
    tvoc: tvoc,
    uv: uv,
    gps: gps,
  })
    .then((result) => {
      console.log("Created Log");
      res.status(201).json({
        message: "Log created successfully!",
        log: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//update log
exports.updateLog = (req, res, next) => {
  const logId = req.params.logId;
  const updatedWeather = req.body.weather;
  const updatedPressure = req.body.pressure;
  const updatedHeight = req.body.height;
  const updatedCo2 = req.body.co2;
  const updatedTvoc = req.body.tvoc;
  const updatedUv = req.body.uv;
  const updatedGps = req.body.gps;
  Log.findByPk(logId)
    .then((log) => {
      if (!log) {
        return res.status(404).json({ message: "Log not found!" });
      }
      log.weather = updatedWeather;
      log.pressure = updatedPressure;
      log.height = updatedHeight;
      log.co2 = updatedCo2;
      log.tvoc = updatedTvoc;
      log.uv = updatedUv;
      log.gps = updatedGps;
      return log.save();
    })
    .then((result) => {
      res.status(200).json({ message: "Log updated!", log: result });
    })
    .catch((err) => console.log(err));
};

//delete log
exports.deleteLog = (req, res, next) => {
  const logId = req.params.logId;
  Log.findByPk(logId)
    .then((log) => {
      if (!log) {
        return res.status(404).json({ message: "Log not found!" });
      }
      return Log.destroy({
        where: {
          id: logId,
        },
      });
    })
    .then((result) => {
      res.status(200).json({ message: "Log deleted!" });
    })
    .catch((err) => console.log(err));
};
