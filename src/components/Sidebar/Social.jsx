import { SvgIcon, Link } from "@material-ui/core";
import { ReactComponent as GitHub } from "../../assets/icons/github.svg";
import { ReactComponent as Medium } from "../../assets/icons/medium.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
import { ReactComponent as Telegram } from "../../assets/icons/tele.svg";

export default function Social() {
  return (
    <div className="social-row">
      {/* <Link href="https://github.com/mushfi" target="_blank">
        <SvgIcon component={GitHub} />
      </Link> */}
      <Link href="https://twitter.com/mush_bsc" target="_blank">
        <SvgIcon component={Twitter} />
      </Link>

      {/* <Link href="https://medium.com/@mush" target="_blank">
        <SvgIcon component={Medium} />
      </Link> */}

      <Link href="https://t.me/mush_BSC" target="_blank">
        <SvgIcon viewBox="0 0 40 35" component={Telegram} />
      </Link>

      <Link href="https://medium.com/@mush" target="_blank">
        <SvgIcon component={Discord} />
      </Link>
    </div>
  );
}
