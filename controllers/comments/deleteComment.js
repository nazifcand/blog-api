export default (req, res) => {
  return res.send({ statusCode: 200, message: 'Delete a comment', slug: req.params.slug, id: req.params.id });
}