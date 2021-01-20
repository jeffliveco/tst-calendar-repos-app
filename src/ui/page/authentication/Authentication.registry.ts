import {FC} from "react";
import Signin from "./containers/signin/Signin";
import Signup from "./containers/signup/Signup";

type ContainerInfo = {
  name: string;
  node: FC;
}

const containers: ContainerInfo[] = [
  {
    name: "signin-page",
    node: Signin
  },
  {
    name: "signup-page",
    node: Signup
  }
]

export const getContainer = (uuid: string): FC => {
  const existContainer = containers.find((container: ContainerInfo) => container.name === uuid);
  if (!existContainer){
    throw new Error("Container doesn't exist");
  }

  return existContainer.node;
}
