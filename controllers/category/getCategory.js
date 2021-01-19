export default (req, res) => {
  return res.send({ statusCode: 200, message: 'Get a category', slug: req.params.slug });
}