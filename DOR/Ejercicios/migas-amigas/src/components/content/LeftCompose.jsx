import PropTypes from "prop-types";

export const LeftCompose = ({title, text, url, alt}) => {
  return (
    <div>
      <img src={url} alt={alt || "Our Product"} width="300" height="300"/>
      <div>
        <p>{title}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

LeftCompose.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string
}