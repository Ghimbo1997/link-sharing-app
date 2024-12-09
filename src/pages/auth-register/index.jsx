import PropTypes from "prop-types";
import Containter from "./index.styled";

const AuthRegisterPage = (props) => {
  return <Containter>Our template component{props.children}</Containter>;
};

AuthRegisterPage.propTypes = {
  children: PropTypes.element,
};
export default AuthRegisterPage;
