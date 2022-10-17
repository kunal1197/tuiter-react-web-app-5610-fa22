import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
  $("#wd-explore").append(`
    <div class="row mt-2">
    <div class="col-2 col-md-2 col-lg-1 col-xl-2">
        ${NavigationSidebar("Explore")}
    </div>
    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
        ${ExploreComponent()}
    </div>
    <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 rounded">
        ${WhoToFollowList()}
    </div>
    </div>
`);
}
$(exploreComponent);
