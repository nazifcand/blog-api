const checkList = (req, res, next) => {
  if (!req.user.permission.show) return next({ statusCode: 401, message: 'Bu işlem için yetkiniz yok' });
  return next();
}

const checkCreate = (req, res, next) => {
  if (!req.user.permission.create) return next({ statusCode: 401, message: 'Bu işlem için yetkiniz yok' });
  return next();
}

const checkDelete = (req, res, next) => {
  if (!req.user.permission.delete) return next({ statusCode: 401, message: 'Bu işlem için yetkiniz yok' });
  return next();
}

const checkUpdate = (req, res, next) => {
  if (!req.user.permission.update) return next({ statusCode: 401, message: 'Bu işlem için yetkiniz yok' });
  return next();
}

export default { checkList, checkCreate, checkDelete, checkUpdate }