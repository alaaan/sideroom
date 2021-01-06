import UserModel from "../models/user_model";
import { EncryptionService } from "./encryption_service";

export default class UserService {
   user = new UserModel();
   userKey = "0x9120298";
   static instance;

   constructor() {
    this.loadUser();
  }

   persistNewUser(model) {
    localStorage.setItem(this.userKey, EncryptionService.Encrypt(model));
    this.user = model;
  }

   clearUser() {
    this.user = new UserModel();
    localStorage.setItem(this.userKey, EncryptionService.Encrypt(this.user));
  }

   persistUser() {
    localStorage.setItem(this.userKey, EncryptionService.Encrypt(this.user));
  }

   loadUser() {
    try {
      const json = localStorage.getItem(this.userKey);
      this.user =
        json !== "undefined" && json !== null && json !== "null"
          ? EncryptionService.Decrypt(json)
          : new UserModel();
    } catch {
      this.user = new UserModel();
    }
  }

   getAuthCookie() {
    return this.user.Cookie;
  }

   isAuthenticated() {
    return this.user.Cookie !== "";
  }

   static getInstance() {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }

    return UserService.instance;
  }
}
