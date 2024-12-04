import PropTypes from "prop-types";
import Containter from "./index.styled";

const TemplateComponent = (props) => {
  return <Containter>Our template component{props.children}</Containter>;
};

TemplateComponent.propTypes = {
  children: PropTypes.element,
};
export default TemplateComponent;
