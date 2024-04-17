import PropTypes from "prop-types";
import { Invalidate } from "./alert/Invalidate";
import { Validate } from "./alert/Validate";

export const SendEmail = ({ validated }) => {
  return (
    <>{validated ? <Validate /> : <Invalidate />}</>
  );
};

SendEmail.propTypes = {
  validated: PropTypes.bool.isRequired,
};
