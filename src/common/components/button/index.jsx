import PropTypes from "prop-types";
import Containter from "./index.styled";

const Button = (props) => {
  return (
    <Containter variant={props.variant} {...props}>
      {props.children}
    </Containter>
  );
};

Button.propTypes = {
  children: PropTypes.element,
  variant: PropTypes.oneOf(["fill", "outline"]),
};
export default Button;
