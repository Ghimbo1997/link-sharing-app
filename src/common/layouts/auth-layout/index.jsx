import PropTypes from "prop-types";
import Containter from "./index.styled";

const TemplatePage = (props) => {
  return (
    <Containter>
      <div className="containter__logo">
        <img alt="devlinks app logo" src="/assets/logo.png"></img>
      </div>
      <section className="containter__content">{props.children}</section>
    </Containter>
  );
};

TemplatePage.propTypes = {
  children: PropTypes.element,
};
export default TemplatePage;
