import PropTypes from "prop-types";
import Containter from "./index.styled";

const AuthLoginPage = (props) => {
  return <Containter>Our template component{props.children}</Containter>;
};

AuthLoginPage.propTypes = {
  children: PropTypes.element,
};
export default AuthLoginPage;
