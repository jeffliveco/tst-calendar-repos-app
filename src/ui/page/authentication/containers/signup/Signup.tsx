import {FC, MouseEvent as RMouseEvent, useCallback, useState} from "react";
import {EKindError, Error} from "../../../../component/error";
import {Field} from "../../../../component/field";
import {Button, EKindButton} from "../../../../component/button";
import {ContainerWrapper} from "../../Authentication.style";
import {IUserStore, useStore} from "../../../../../domain";
import {SignupViewStore} from "../../../../../domain/store";
import {observer} from "mobx-react-lite";

const Signup: FC = () => {
  const store = useStore();
  const [userStore] = useState<IUserStore>(store.userStore);
  const [viewStore] = useState<SignupViewStore>(userStore.currentContainer as SignupViewStore);

  const onChangeNameAction = useCallback((value: string) => {
    viewStore.onChangeName(value);
  }, [viewStore]);

  const onChangeEmailAction = useCallback((value: string) => {
    viewStore.onChangeEmail(value);
  }, [viewStore]);

  const onChangePasswordAction = useCallback((value: string) => {
    viewStore.onChangePassword(value);
  }, [viewStore]);

  const onChangeConfirmPasswordAction = useCallback((value: string) => {
    viewStore.onChangeConfirmPassword(value);
  }, [viewStore]);

  const onSignupAction = useCallback(() => {
    viewStore.signup();
  }, [viewStore]);

  const onChangeViewAction = useCallback((event: RMouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    userStore.setScreen("signin-page");
  }, [userStore]);

  console.log("errors", viewStore.errors);

  return (
    <ContainerWrapper>
      <h1>Signup</h1>
      <Error kind={EKindError.CATCH} errors={viewStore.errors} />
      <Field
        type={"text"}
        placeholder={"Name"}
        value={viewStore.name}
        onChange={onChangeNameAction}
      />
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
      <Field
        type={"password"}
        placeholder={"Confirm Password"}
        value={viewStore.confirmPassword}
        onChange={onChangeConfirmPasswordAction}
      />
      <Button
        label={"Create"}
        kind={EKindButton.PRIMARY}
        block={true}
        onClick={onSignupAction}
      />
      <span>Already have an account? <a href="#" onClick={onChangeViewAction}>Sign In</a></span>
    </ContainerWrapper>
  );
}

export default observer(Signup);
