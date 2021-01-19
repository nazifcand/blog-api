export default (req, res) => {
  return res.send({ statusCode: 200, message: 'Get a page', slug: req.params.slug });
}