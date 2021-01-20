import {IStore} from "./definition";
import {Store} from "./store";

const StoreInstance: IStore = new Store();
export default StoreInstance;

export * from "./context";
export * from "./hook";
export * from "./definition";
export * from "./entity";

