const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
var path = require('path');
var cors = require('cors');

const users = require("./routes/api/user");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


//Api for  songs
app.get('/songs', function (req, res) {
  var songsList = [];
  const path = require('path');
  const fs = require('fs');
  //joining path of directory 
  const directoryPath = path.join(__dirname, 'songs');
  //passsing directoryPath and callback function
  fs.readdir(directoryPath, function (err, files) {
      //handling error
      if (err) {
          return console.log('Unable to scan directory: ' + err);
      } else {
          //listing all files using forEach
          files.forEach(function (file) {
              console.log(file);
              songsList.push({name: file + ""});
              //res.sendFile(file)
              // res.sendFiles(file)

          });
          console.log(songsList);
          res.json(songsList);
      }


  });
})
app.get('/get_song', function (req, res) {
  console.log(req.query);
  res.download(path.join(__dirname, '../Back_end/songs', req.query.song_name));

  // res.download("./songs/"+req.query.song_name);
  
})

//get arman songs
app.get('/getarman_song', function (req, res) {
  console.log(req.query);
  res.download(path.join(__dirname, '../Back_end/arman', req.query.song_name));

  
})
//get atif songs
app.get('/getatif_song', function (req, res) {
  console.log(req.query);
  res.download(path.join(__dirname, '../Back_end/Atif', req.query.song_name));

  
})
//get arijitsongs
app.get('/getarijit_song', function (req, res) {
  console.log(req.query);
  res.download(path.join(__dirname, '../Back_end/Arijit', req.query.song_name));

  
})
//get Honey songs
app.get('/gethoney_song', function (req, res) {
  console.log(req.query);
  res.download(path.join(__dirname, '../Back_end/Honeysingh', req.query.song_name));

  
})
//get setia songs
app.get('/getsetia_song', function (req, res) {
  console.log(req.query);
  res.download(path.join(__dirname, '../Back_end/setia', req.query.song_name));
})
//get Charlie songs
app.get('/getcharlie_song', function (req, res) {
  console.log(req.query);
  res.download(path.join(__dirname, '../Back_end/charlie', req.query.song_name));
})

//get charlie songs
app.get('/charlie_songs', function (req, res) {
  var songsList = [];
  const path = require('path');
  const fs = require('fs');
  //joining path of directory 
  const directoryPath = path.join(__dirname, 'charlie');
  //passsing directoryPath and callback function
  fs.readdir(directoryPath, function (err, files) {
      //handling error
      if (err) {
          return console.log('Unable to scan directory: ' + err);
      } else {
          //listing all files using forEach
          files.forEach(function (file) {
              console.log(file);
              songsList.push({name: file + ""});
              //res.sendFile(file)
              // res.sendFiles(file)

          });
          console.log(songsList);
          res.json(songsList);
      }


  });
})
//get setia songs
app.get('/setia_songs', function (req, res) {
  var songsList = [];
  const path = require('path');
  const fs = require('fs');
  //joining path of directory 
  const directoryPath = path.join(__dirname, 'setia');
  //passsing directoryPath and callback function
  fs.readdir(directoryPath, function (err, files) {
      //handling error
      if (err) {
          return console.log('Unable to scan directory: ' + err);
      } else {
          //listing all files using forEach
          files.forEach(function (file) {
              console.log(file);
              songsList.push({name: file + ""});
              //res.sendFile(file)
              // res.sendFiles(file)

          });
          console.log(songsList);
          res.json(songsList);
      }


  });
})
//get arman songs
app.get('/arman_songs', function (req, res) {
  var songsList = [];
  const path = require('path');
  const fs = require('fs');
  //joining path of directory 
  const directoryPath = path.join(__dirname, 'arman');
  //passsing directoryPath and callback function
  fs.readdir(directoryPath, function (err, files) {
      //handling error
      if (err) {
          return console.log('Unable to scan directory: ' + err);
      } else {
          //listing all files using forEach
          files.forEach(function (file) {
              console.log(file);
              songsList.push({name: file + ""});
              //res.sendFile(file)
              // res.sendFiles(file)

          });
          console.log(songsList);
          res.json(songsList);
      }


  });
})
//get atif songs
app.get('/atif_songs', function (req, res) {
  var songsList = [];
  const path = require('path');
  const fs = require('fs');
  //joining path of directory 
  const directoryPath = path.join(__dirname, 'Atif');
  //passsing directoryPath and callback function
  fs.readdir(directoryPath, function (err, files) {
      //handling error
      if (err) {
          return console.log('Unable to scan directory: ' + err);
      } else {
          //listing all files using forEach
          files.forEach(function (file) {
              console.log(file);
              songsList.push({name: file + ""});
              //res.sendFile(file)
              // res.sendFiles(file)

          });
          console.log(songsList);
          res.json(songsList);
      }


  });
})
//get arijit songs
app.get('/arijit_songs', function (req, res) {
  var songsList = [];
  const path = require('path');
  const fs = require('fs');
  //joining path of directory 
  const directoryPath = path.join(__dirname, 'Arijit');
  //passsing directoryPath and callback function
  fs.readdir(directoryPath, function (err, files) {
      //handling error
      if (err) {
          return console.log('Unable to scan directory: ' + err);
      } else {
          //listing all files using forEach
          files.forEach(function (file) {
              console.log(file);
              songsList.push({name: file + ""});
              //res.sendFile(file)
              // res.sendFiles(file)

          });
          console.log(songsList);
          res.json(songsList);
      }


  });
})
//get honey songs
app.get('/honey_songs', function (req, res) {
  var songsList = [];
  const path = require('path');
  const fs = require('fs');
  //joining path of directory 
  const directoryPath = path.join(__dirname, 'Honeysingh');
  //passsing directoryPath and callback function
  fs.readdir(directoryPath, function (err, files) {
      //handling error
      if (err) {
          return console.log('Unable to scan directory: ' + err);
      } else {
          //listing all files using forEach
          files.forEach(function (file) {
              console.log(file);
              songsList.push({name: file + ""});
              //res.sendFile(file)
              // res.sendFiles(file)

          });
          console.log(songsList);
          res.json(songsList);
      }


  });
})


// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
