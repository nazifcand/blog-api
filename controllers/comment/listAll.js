export default (req, res) => {
  return res.send({ statusCode: 200, message: 'List all comment', slug: req.params.slug });
}