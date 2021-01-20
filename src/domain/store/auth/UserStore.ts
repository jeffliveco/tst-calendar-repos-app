import {IUserStore, IViewStore} from "../../definition";
import {User} from "../../entity";
import {action, observable} from "mobx";
import SignupViewStore from "./view/SignupViewStore";
import SigninViewStore from "./view/SigninViewStore";

export class UserStore implements IUserStore {
  @observable
  user: User = {} as User;
  @observable
  isLogged: boolean;
  @observable
  currentContainer: IViewStore;

  constructor() {
    const userJSON = localStorage.getItem("user");
    if (userJSON){
      this.user = JSON.parse(userJSON);
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.currentContainer = new SigninViewStore(this);
  }

  @action.bound
  setScreen(container: string): void {
    switch (container) {
      case "signup-page": {
        this.currentContainer = new SignupViewStore(this);
        break;
      }

      case "signin-page": {
        this.currentContainer = new SigninViewStore(this);
        break;
      }
    }
  }

  @action.bound
  setLogged(value: boolean): void {
    this.isLogged = value;
  }
}
