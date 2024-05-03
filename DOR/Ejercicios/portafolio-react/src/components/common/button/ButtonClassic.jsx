import PropType from "prop-types";
import { Icons } from "../icon/Icons";

export const ButtonClassic = ({buttonLink, buttonName, buttonIconClass, className}) => {
  return (
    <div>
      <a className={className} href={buttonLink} target="_blank">
        <span>{buttonName}</span>
        {buttonIconClass && <Icons icon={buttonIconClass} />}
      </a>
    </div>
  );
};

ButtonClassic.propTypes = {
  buttonLink: PropType.string.isRequired,
  buttonName: PropType.string.isRequired,
  buttonIconClass: PropType.string,
  className: PropType.string.isRequired
}