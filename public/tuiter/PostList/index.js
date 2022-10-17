import PostItem from "./PostItem.js";
import Posts from "./posts.js";

const PostSummaryList = () => {
  return `
        <ul class="list-group">
            ${Posts.map((post) => PostItem(post)).join("")}
        </ul>
    `;
};
export default PostSummaryList;
