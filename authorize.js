const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "prem") {
    req.user = { name: "prem", id: 1 };
    next();
  } else {
    res.status(401).send("unauthorized");
  }
  console.log("authorize");
  next();
};
module.exports = authorize;
