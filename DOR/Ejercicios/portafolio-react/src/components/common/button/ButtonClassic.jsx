export const ButtonClassic = (buttonLink, buttonName, buttonIconClass) => {
  return (
    <div>
      <a href={buttonLink} target="_blank">
        <span>{buttonName}</span>
        <span className={buttonIconClass ? buttonIconClass : null}>
          
        </span>
      </a>
    </div>
  );
};
