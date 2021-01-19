export default (req, res) => {
  return res.send({ statusCode: 200, message: 'Update a page with new info', slug: req.params.slug });
}