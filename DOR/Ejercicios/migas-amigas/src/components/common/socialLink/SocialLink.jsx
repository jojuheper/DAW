import { Icon } from "../icon/Icon";

export const SocialLink = () => {
  const facebook = "facebook";
  const instagram = "instagram";
  return (
    <div className="d-flex gap-4">
      <Icon icon={facebook} />
      <Icon icon={instagram} />
    </div>
  );
};
