/**
 * Title : Data
 * Description: Data
 * Author: Touhid Alam
 * Date: 15/ 03/ 2022
 */

// dependencies
const fs = require("fs");
const path = require("path");

// module scaffolding
const lib = {};

//base directory of the data folder
lib.basedir = path.join(__dirname, "/../.data/");

// write data to file
lib.create = function (dir, file, data, callback) {
  fs.open(
    lib.basedir + dir + "/" + file + ".json",
    "wx",
    function (error, fileDescription) {
      if (!error && fileDescription) {
        // convert data to string
        const stringData = JSON.stringify(data);

        // write data to file and then close it
        fs.writeFile(fileDescription, stringData, (erro) => {
          if (!erro) {
            fs.close(fileDescription, (err) => {
              if (!err) {
                callback(false);
              } else {
                callback("Error closing the new file!");
              }
            });
          } else {
            callback("Error writing to new file!");
          }
        });
      } else {
        callback("Could not create a new file, it may already exists.");
      }
    }
  );
};

// read data from file
lib.read = (dir, file, callback) => {
  fs.readFile(`${lib.basedir + dir}/${file}.json`, "utf8", (error, data) => {
    callback(error, data);
  });
};

// update existing file
lib.update = (dir, file, data, callback) => {
  //file open for write
  fs.open(
    `${lib.basedir + dir}/${file}.json`,
    "r+",
    (error, fileDescription) => {
      if (!error && fileDescription) {
        // convert data to string
        const stringData = JSON.stringify(data);

        // truncate the file
        fs.ftruncate(fileDescription, (erro) => {
          if (!erro) {
            // write data to file and then close it
            fs.writeFile(fileDescription, stringData, (erro) => {
              if (!erro) {
                fs.close(fileDescription, (err) => {
                  if (!err) {
                    callback(false);
                  } else {
                    callback("Error closing the new file!");
                  }
                });
              } else {
                callback("Error writing to new file!");
              }
            });
          } else {
            console.log("Error truncating file");
          }
        });
      } else {
        callback(
          "Error update : Could not create a new file, it may already exists."
        );
      }
    }
  );
};

// delete existing file
lib.delete = (dir, file, callback) => {
  fs.unlink(`${lib.basedir + dir}/${file}.json`, (error) => {
    if (!error) {
      callback(false);
    } else {
      callback(" Error deleteing file");
    }
  });
};

module.exports = lib;
