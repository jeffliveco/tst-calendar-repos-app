import { useContext } from "react";
import {StoreContext} from "../context";

const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreContext.')
  }
  return store;
};

export {useStore};
