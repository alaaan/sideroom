export class EncryptionService {
  static CryptoJS = require("crypto-js");
  static Encrypt(data) {
    return this.CryptoJS.AES.encrypt(JSON.stringify(data), "0x100F").toString();
  }
  static Decrypt(cipherText) {
    var bytes = this.CryptoJS.AES.decrypt(cipherText, "0x100F");
    return JSON.parse(bytes.toString(this.CryptoJS.enc.Utf8));
  }
}
