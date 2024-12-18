import PropTypes from "prop-types";
import Containter from "./index.styled";

const TemplatePage = (props) => {
  return <Containter>Our template component{props.children}</Containter>;
};

TemplatePage.propTypes = {
  children: PropTypes.element,
};
export default TemplatePage;
