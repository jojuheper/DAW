import PropTypes from "prop-types";

export const LeftCompose = ({ title, text, url, alt }) => {
  return (
    <div className="leftComp__container d-flex  flex-column m-0 p-0 w-100 h-100 container-fluid">
      <div className="leftComp__title d-flex justify-content-center m-0 p-2">
        <h2 className="leftComp__title-text d-flex align-items-center m-0 p-2 fw-bold">
          {title}
        </h2>
      </div>
      <div className="leftComp__bottom d-flex flex-column flex-md-row">
        <div className="col-md-6">
          <img
            className="leftComp__image order-1 w-100 h-100"
            src={url}
            alt={alt || "Our Product"}
            width="300"
            height="300"
          />
        </div>
        <div className="leftComp__text order-2 p-2 p-md-4 col-md-6 d-flex align-items-center">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

LeftCompose.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
