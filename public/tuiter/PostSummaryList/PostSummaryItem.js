const PostSummaryItem = (post) => {
  return `<li class="list-group-item">
              <div class="row wd-explore-story-container" 
              style="padding-top: 4px; padding-bottom: 4px;">
                  <div class="col-10" style="font-size: 14px;">
                      <div class="text-muted">${post.topic}</div>

                      <div class="">
                          <b>${post.userName}</b>&nbsp;
                          <i class="fa fa-check-circle" aria-hidden="true"></i>
                          <span class="text-muted">&nbsp;- ${post.time}</span>
                      </div>

                      <div class="">
                      <b> ${post.title} </b>
                      </div>

                  </div>

                  <div class="col-2 wd-explore-feed-img-container wd-flex-and-center" 
                       style="display: flex; justify-content: center; align-items: center;">
                      <img
                          src=${post.image}
                          class="wd-explore-feed-img"
                          style=" height: 62px; width: 62px; display: block; border-radius: 6px; object-fit: cover;"
                      />
                  </div>
                  
              </div>
          </li>`;
};
export default PostSummaryItem;
