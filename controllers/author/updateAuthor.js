export default (req, res) => {
  return res.send({ statusCode: 200, message: 'Update a author with new info', slug: req.params.slug });
}