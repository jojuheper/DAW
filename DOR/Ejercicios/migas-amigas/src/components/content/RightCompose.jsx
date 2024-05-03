import PropTypes from "prop-types";

export const RightCompose = ({ title, text, url, alt }) => {
  return (
    <div className="rightComp__container d-flex flex-column m-0 p-0 w-100 h-100">
      <div className="rightComp__title d-flex justify-content-center fs-4 m-0 p-2">
        <p className="rightComp__title-text d-flex align-items-center fs-4 m-0 p-2 fw-bold">
          {title}
        </p>
      </div>
      <div className="rightComp__bottom d-flex flex-column flex-md-row">
        <div className="col-sm-6">
          <img
            className="rightComp__image order-1 w-100 h-100"
            src={url}
            alt={alt || "Our Product"}
            width="300"
            height="300"
          />
        </div>
        <div className="rightComp__text order-2 p-2 col-md-6 d-flex align-items-center">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

RightCompose.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
