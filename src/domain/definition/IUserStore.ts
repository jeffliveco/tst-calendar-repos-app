import {User} from "../entity";
import {IViewStore} from "./IViewStore";

export interface IUserStore {
  user: User;
  isLogged: boolean;
  currentContainer: IViewStore;
  setScreen(container: string): void;
  setLogged(value: boolean): void;
}
