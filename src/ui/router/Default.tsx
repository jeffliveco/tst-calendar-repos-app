import {FC, ReactElement, useCallback, useEffect, useState} from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import {Profile} from "../page/profile";
import {Authentication} from "../page/authentication";
import {useStore} from "../../domain";
import {observer} from "mobx-react-lite";

const DEFAULT_PATH: string = "/";
const AUTH_PATH: string = "/auth";
const PROFILE_PATH: string = "/profile";

const routes: string[] = [DEFAULT_PATH, AUTH_PATH, PROFILE_PATH];

const DefaultRouter: FC = () => {
  const {userStore} = useStore();
  const [loading, isLoading] = useState(true);
  const [inSession, isInSession] = useState(false);

  console.log('userStore', userStore.isLogged);

  const redirectValidation = useCallback((props: RouteComponentProps) => {
    const { location } = props;
    let responseComponent: ReactElement = <></>;
    if (inSession) {
      switch (location.pathname){
        case DEFAULT_PATH:
          responseComponent = <Redirect to="/profile"/>;
          break;
        case AUTH_PATH:
          responseComponent = <Redirect to="/profile"/>;
          break;
        case PROFILE_PATH:
          responseComponent = <Profile />;
          break;
      }
    } else {
      switch (location.pathname){
        case DEFAULT_PATH:
          responseComponent = <Redirect to="/auth"/>;
          break;
        case AUTH_PATH:
          responseComponent = <Authentication />;
          break;
        case PROFILE_PATH:
          responseComponent = <Redirect to="/auth"/>;
          break;
      }
    }

    return responseComponent;
  }, [inSession]);

  useEffect(() => {
    if (userStore.isLogged !== undefined){
      isLoading(false);
      isInSession(userStore.isLogged);
    }
  }, [userStore.isLogged]);

  if (loading){
    return <>Loadding...</>
  } else {
    return (
      <BrowserRouter>
        <Switch>
          {routes.map((value: string, index:number) => {
            return <Route
              key={"route-" + index}
              exact
              path={value}
              render={redirectValidation}
            />
          })}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default observer(DefaultRouter);
