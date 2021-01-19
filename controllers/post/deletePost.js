export default (req, res) => {
  return res.send({ statusCode: 200, message: 'Delete a post', slug: req.params.slug });
}