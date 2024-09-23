 const notFoundHandler = (req, res) => {
    res.status(404).json({ message: "Path not found"});
 }

 module.exports = notFoundHandler