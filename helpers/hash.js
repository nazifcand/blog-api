import crypto from 'crypto';

export default value => {
  const md5 = crypto.createHash('md5').update(value).digest('hex');
  return crypto.createHash('sha1').update(md5).digest('hex');
}