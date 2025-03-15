/* eslint-disable react/prop-types */
import { Button } from "@mui/material";

const AppButton = (props) => {
  return (
    <Button
      variant={props.type}
      color={props.action}
      disabled={props.disabled}
      onClick={props.handleOnClick}
    >
      My Button
    </Button>
  );
};

export default AppButton;
