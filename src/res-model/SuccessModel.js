/**
 * @description 成功のデータ
 * @author GAO
 */

class SuccessModel {
  constructor(data) {
    this.errno = 0
    if (data != null) {
      this.data = data
    }
  }
}


module.exports = SuccessModel