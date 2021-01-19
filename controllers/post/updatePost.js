export default (req, res) => {
  return res.send({ statusCode: 200, message: 'Update a post with new info', slug: req.params.slug });
}