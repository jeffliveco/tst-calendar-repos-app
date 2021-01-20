import {FC} from "react";
import {EKindError} from "./EKindError";

import {ErrorWrapper, ErrorBox} from "./Error.styled";

type ErrorProps = {
  kind: EKindError,
  errors: string[];
}

const Error: FC<ErrorProps> = (props:ErrorProps) => {
  const {kind, errors} = props;
  return (
    <ErrorWrapper>
      {EKindError.CATCH === kind && errors.length > 0 && <ErrorBox><h2>Error!!</h2>{errors.map((value, index) => <span key={"msj-" + index}>&gt; {value}</span>)}</ErrorBox>}
    </ErrorWrapper>
  );
}

export default Error;
