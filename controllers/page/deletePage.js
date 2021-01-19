export default (req, res) => {
  return res.send({ statusCode: 200, message: 'Delete a page', slug: req.params.slug });
}