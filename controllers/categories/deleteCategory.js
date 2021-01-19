export default (req, res) => {
  return res.send({ statusCode: 200, message: 'Delete a category', slug: req.params.slug });
}