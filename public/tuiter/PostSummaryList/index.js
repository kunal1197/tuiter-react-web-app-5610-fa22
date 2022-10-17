import PostSummaryItem from "./PostSummaryItem.js";
import Posts from "./posts.js";

const PostSummaryList = () => {
  return `
        <ul class="list-group">
            ${Posts.map((post) => PostSummaryItem(post)).join("")}
        </ul>
`;
};
export default PostSummaryList;
