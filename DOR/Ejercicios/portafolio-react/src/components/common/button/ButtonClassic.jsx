import PropType from "prop-types";
import { Icons } from "../icon/Icons";
import { Link } from "react-scroll";

export const ButtonClassic = ({
  buttonLink,
  buttonName,
  buttonIconClass,
  classname,
  isExternal,
}) => {
  return (
    <div>
      {isExternal ? (
        <a className={classname} href={buttonLink} target="_blank">
        <span>{buttonName}</span>
        {buttonIconClass && <Icons icon={buttonIconClass} />}
      </a>
      ) : (
        <Link
          className={classname}
          to={buttonLink}
          smooth={true}
          duration={500}
        >
          <span>{buttonName}</span>
          {buttonIconClass && <Icons icon={buttonIconClass} />}
        </Link>
      )}
    </div>
  );
};

ButtonClassic.propTypes = {
  buttonLink: PropType.string.isRequired,
  buttonName: PropType.string.isRequired,
  buttonIconClass: PropType.string,
  classname: PropType.string,
  isExternal: PropType.bool,
};
