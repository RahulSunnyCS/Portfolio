import { ICONS } from "../../constants";
import IconContainer from "../IconContainer";
import "./styles.scss";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="left">
        <IconContainer icon={ICONS.TWITTER} />
        <IconContainer icon={ICONS.GITHUB} />
        <IconContainer icon={ICONS.LINKEDIN} />
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Topbar;
