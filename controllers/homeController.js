const path = require("path");

let getHome = (req, res) => {
  var curUser = null;
  if (req.isAuthenticated()) {
    curUser = req.user;
  }
  return res.sendFile(path.join(`${__dirname}/../views/master.html`));
};

module.exports = {
  getHome: getHome,
};
