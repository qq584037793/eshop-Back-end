/**
 * @description 失敗のデータ
 * @author GAO
 */

class ErrorModel {
  constructor(error = -1, message = 'error') {
    this.error = error
    this.message = message

  }
}


module.exports = ErrorModel