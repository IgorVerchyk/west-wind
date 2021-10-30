exports.mongoseErrors = (err, req, res, next) => {
    if (!err.errors) return next(err);
    const errorKeys = Object.keys(err.errors);
    let message = "";
    errorKeys.forEach((key) => (message += err.errors[key].message + ", "));
  
    message = message.substr(0, message.length - 2);
  
    res.status(400).json({
      message,
    });
  };

  
exports.notFound = (req, res, next) => {
    res.status(404).json({
      message: "Route not found",
    });
  };

  exports.catchErrors = (fn) => {
    return function (req, res, next) {
      fn(req, res, next).catch((err) => {
        //Validation Errors
        if (typeof err === "string") {
          res.status(400).json({
            message: err,
          });
        } else {
          next(err);
        }
      });
    };
  };
