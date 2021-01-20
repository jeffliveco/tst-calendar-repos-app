import {IUserStore, IViewStore} from "../../../definition";
import {action, observable} from "mobx";
import {User} from "../../../entity";

export default class SigninViewStore implements IViewStore {
  @observable
  uuid: string = "signin-page";

  @observable
  email: string = '';

  @observable
  password: string = '';

  @observable
  errors: string[] = [];

  private userStore: IUserStore;

  constructor(userStore: IUserStore) {
    this.userStore = userStore;
  }

  @action.bound
  onChangeEmail(value: string): void {
    this.email = value;
  }

  @action.bound
  onChangePassword(value: string): void {
    this.password = value;
  }

  @action.bound
  signin(): void {
    this.errors = [];

    if (this.email.length <= 0) {
      this.errors.push("Field 'Email' is required");
    } else {
      const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if(!regexEmail.test(this.email)){
        this.errors.push("Field 'Email' is invalid email");
      }
    }

    if (this.password.length <= 0) {
      this.errors.push("Field 'Password' is required");
    }

    if (this.errors.length === 0) {
      const usersJSON = localStorage.getItem("users");
      if (usersJSON) {
        const userList:User[] = JSON.parse(usersJSON) as User[];
        const existUser = userList.find((value: User) => value.email === this.email && value.password === this.password);

        if (existUser) {
          localStorage.setItem("user", JSON.stringify(existUser));
          this.userStore.setLogged(true);
        } else {
          this.errors.push("Values entered are invalid");
        }
      } else {
        this.errors.push("User doesn't exist");
      }

      this.email = '';
      this.password = '';
    }
  }
}
