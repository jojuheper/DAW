import PropTypes from "prop-types";
import { Invalidate } from "./alert/Invalidate";
import { Validate } from "./alert/Validate";

export const SendEmail = ({ inputs, validated }) => {
  console.log({validated});
  return (
    <>{validated ? <Validate {...inputs} /> : <Invalidate {...inputs} />}</>
  );
};

SendEmail.propTypes = {
  inputs: PropTypes.object.isRequired,
  validated: PropTypes.bool.isRequired,
};
