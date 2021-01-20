import {IStore, IUserStore} from "../definition";
import {UserStore} from "./auth/UserStore";

export class Store implements IStore {
  userStore: IUserStore;

  constructor() {
    this.userStore = new UserStore();
  }

}
