const checkCreate = (req, res, next) => {
  if (!req.user.permission.create) return next({ statusCode: 401, message: 'Oluşturmaya yetkiniz yok' });
  return next();
}

const checkDelete = (req, res, next) => {
  if (!req.user.permission.delete) return next({ statusCode: 401, message: 'Silmek için yetkiniz yok' });
  return next();
}

const checkUpdate = (req, res, next) => {
  if (!req.user.permission.update) return next({ statusCode: 401, message: 'Güncellemek için yetkiniz yok' });
  return next();
}

export default { checkCreate, checkDelete, checkUpdate }