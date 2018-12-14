var sqlMap = {
  getValues: 'SELECT * FROM test WHERE id = ?',
  setValue: 'UPDATE test SET name = ? WHERE id=?'
}
module.exports = sqlMap;