import {IUserStore, IViewStore} from "../../../definition";
import {action, observable} from "mobx";
import {User} from "../../../entity";

export default class SignupViewStore implements IViewStore {
  @observable
  uuid: string = "signup-page";

  @observable
  email: string = '';

  @observable
  password: string = '';

  @observable
  confirmPassword: string = '';

  @observable
  name: string = '';

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
  onChangeConfirmPassword(value: string): void {
    this.confirmPassword = value;
  }

  @action.bound
  onChangeName(value: string): void {
    this.name = value;
  }

  @action.bound
  signup():void {
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

    if (this.confirmPassword.length <= 0) {
      this.errors.push("Field 'Confirm Password' is required");
    }

    if(this.password !== this.confirmPassword) {
      this.errors.push("Confirm password is different from the written password");
    }

    if (this.name.length <= 0) {
      this.errors.push("Field 'Name' is required");
    }

    console.log("this.errors", this.errors);

    if (this.errors.length === 0) {
      const usersJSON = localStorage.getItem("users");
      const newUser: User = new User(this.name, this.email, this.password);
      let userList:User[];
      if (usersJSON) {
        userList = JSON.parse(usersJSON) as User[];
        const existUser = userList.find((value: User) => value.email === this.email && value.password === this.password);

        if (existUser) {
          this.errors.push("User already exist");
        } else {
          userList.push(newUser);
        }
      } else {
        userList = [newUser];
      }

      console.log("userList", userList);
      localStorage.setItem("users", JSON.stringify(userList));

      this.email = '';
      this.password = '';
      this.confirmPassword = '';
      this.name = '';

      this.userStore.setScreen("signin-page");
    }
  }
}
