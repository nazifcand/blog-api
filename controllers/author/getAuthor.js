export default (req, res) => {
  return res.send({ statusCode: 200, message: 'Get a author', slug: req.params.slug });
}