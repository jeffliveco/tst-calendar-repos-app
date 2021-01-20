import {FC, useState} from "react";
import {IUserStore, useStore} from "../../../domain";
import {getContainer} from "./Authentication.registry";
import {
  PageWrapper,
  BannerWrapper,
  FormWrapper
} from "./Authentication.style";
import {observer} from "mobx-react-lite";

const Authentication: FC = () => {
  const store = useStore();
  const currentScreen = store.userStore.currentContainer;
  const ComponentUI = getContainer(currentScreen.uuid);

  return (
    <PageWrapper>
      <BannerWrapper />
      <FormWrapper><ComponentUI /></FormWrapper>
    </PageWrapper>
  );
}

export default observer(Authentication);
