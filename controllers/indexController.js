export default (req, res) => {
  return res.send(process.env.NODE_ENV);
}