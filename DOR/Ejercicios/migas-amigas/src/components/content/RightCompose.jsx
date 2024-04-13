import PropTypes from "prop-types";

export const RightCompose = ({title, text, url, alt}) => {
  
  return (
    <div>
      <div>
        <p>{title}</p>
        <p>{text}</p>
      </div>
      <img src={url} alt={alt || "Our Product"} width="300" height="300"/>
    </div>
  );
};

RightCompose.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string
}