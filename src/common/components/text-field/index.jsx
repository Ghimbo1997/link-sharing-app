import PropTypes from "prop-types";
import Containter from "./index.styled";

const TextField = (props) => {
  return (
    <Containter isErrorVisible={props.isErrorVisible}>
      <div>
        {props.isIconVisible ? props.iconChildren : null}
        <input
          name={props.name}
          onChange={props.onChange}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          value={props.value}
          placeholder={props.placeHolder}
        />
      </div>
      {props.isErrorVisible ? <p>{props.errorChildren}</p> : null}
    </Containter>
  );
};

TextField.propTypes = {
  iconChildren: PropTypes.element,
  isIconVisible: PropTypes.bool,
  isErrorVisible: PropTypes.bool,
  errorChildren: PropTypes.element,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeHolder: PropTypes.string,
  onFocus: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.oneOf(["text", "email", "password"]),
};
export default TextField;
