export default (req, res) => {
  return res.send({ statusCode: 200, message: 'Update a comment with new info', slug: req.params.slug, id: req.params.id });
}