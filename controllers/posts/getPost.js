export default (req, res) => {
  return res.send({ statusCode: 200, message: 'Get a post', slug: req.params.slug });
}