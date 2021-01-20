import {FC, MouseEvent as RMouseEvent, useCallback, useState} from "react";
import {ContainerWrapper} from "../../Authentication.style";
import {Field} from "../../../../component/field";
import {Button, EKindButton} from "../../../../component/button";
import {IUserStore, useStore} from "../../../../../domain";
import {SigninViewStore} from "../../../../../domain/store";
import {EKindError, Error} from "../../../../component/error";
import {observer} from "mobx-react-lite";

const Signin: FC = () => {
  const store = useStore();
  const [userStore] = useState<IUserStore>(store.userStore);
  const [viewStore] = useState<SigninViewStore>(userStore.currentContainer as SigninViewStore);

  const onChangeEmailAction = useCallback((value: string) => {
    viewStore.onChangeEmail(value);
  }, [viewStore]);

  const onChangePasswordAction = useCallback((value: string) => {
    viewStore.onChangePassword(value);
  }, [viewStore]);

  const onSigninAction = useCallback(() => {
    viewStore.signin();
  }, [viewStore]);

  const onChangeViewAction = useCallback((event: RMouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    userStore.setScreen("signup-page");
  }, [userStore]);

  return (
    <ContainerWrapper>
      <h1>Signin</h1>
      <Error kind={EKindError.CATCH} errors={viewStore.errors} />
      <Field
        type={"text"}
        placeholder={"Email"}
        value={viewStore.email}
        onChange={onChangeEmailAction}
      />
      <Field
        type={"password"}
        placeholder={"Password"}
        value={viewStore.password}
        onChange={onChangePasswordAction}
      />
      <Button
        label={"Enter"}
        kind={EKindButton.PRIMARY}
        block={true}
        onClick={onSigninAction}
      />
      <span>Don't have an account? <a href="#" onClick={onChangeViewAction}>Sign Up</a></span>
    </ContainerWrapper>
  );
}

export default observer(Signin);
