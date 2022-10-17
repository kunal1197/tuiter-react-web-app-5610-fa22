import WhoToFollowListItem from "./WhoToFollowListItem.js";
import Who from "./Who.js";

const styles = {};

const WhoToFollowList = () => {
  return `
        <ul class="list-group">
            <li class="list-group-item" "border-radius: 35px;>
              <div class="row" style="font-size: 14px;"}><b>Who to follow</b></div>
            </li>
            ${Who.map((listItem) => WhoToFollowListItem(listItem)).join("")}
        </ul>
`;
};
export default WhoToFollowList;
