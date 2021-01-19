export default (req, res) => {
  return res.send({ statusCode: 200, message: 'Get a comment', slug: req.params.slug, id: req.params.id });
}