import PostList from "../PostList/index.js";

const HomeComponent = () => {
  return `
            <div class="row">

                <div class="col-10"
                        style="display: flex; justify-content: center; align-items: center;">
                    <div class="input-group">

                        <span class="input-group-append" 
                        style="background-color:white; border-radius: 26px 0 0 26px;">
                            <button class="btn" type="button">
                            <i class="fa fa-search"></i>
                            </button>
                        </span>

                        <input
                            class="form-control" type="search" placeholder="Search Twitter"
                            style="border-radius: 0 26px 26px 0;"
                        />
                    </div>
                </div>

                <div class="col-2" 
                     style="display: flex; justify-content: center; align-items: center;>
                    <a href="#">
                    <i class="fa fa-inverse fa-cog fa-2x" aria-hidden="true"></i>
                    </a>
                </div>

            </div>

            <!-- Tab Bar Section -->
            <ul class="nav mb-2 mt-2 nav-tabs">
                      
                <span class="nav-item">
                    <a class="nav-link nav-link active" href="../ExploreScreen/Old_Explore/for-you.html"><small>For You</small></a>
                </span>
                <span class="nav-item">
                    <a class="nav-link" href="../ExploreScreen/Old_Explore/trending.html"><small>Trending</small></a>
                </span>
                <span class="nav-item">
                    <a class="nav-link " href="#"><small>COVID-19</small></a>
                </span>
                <span class="nav-item">
                    <a class="nav-link " href="../ExploreScreen/Old_Explore/news.html"><small>News</small></a>
                </span>
                <span class="nav-item">
                    <a class="nav-link " href="../ExploreScreen/Old_Explore/sports.html"><small>Sports</small></a>
                </span>
                <span class="nav-item d-none d-md-inline d-sm-none">
                    <a class="nav-link " href="../ExploreScreen/Old_Explore/entertainment.html">
                    <small> Entertainment </small> </a>
                </span>
                
            </ul>
            ${PostList()}
    `;
};
export default HomeComponent;
