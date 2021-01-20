import {createContext} from "react";
import {IStore} from "../definition";

const StoreContext = createContext<IStore | undefined>(undefined);
export {StoreContext};
