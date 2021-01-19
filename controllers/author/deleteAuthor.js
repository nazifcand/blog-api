export default (req, res) => {
  return res.send({ statusCode: 200, message: 'Delete a author', slug: req.params.slug });
}