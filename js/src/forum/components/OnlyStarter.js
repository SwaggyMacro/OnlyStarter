import { extend } from 'flarum/extend';
import DiscussionPage from 'flarum/components/DiscussionPage';
import Button from 'flarum/components/Button'
import app from 'flarum/app';
import PostUser from 'flarum/components/PostUser';
import PostStream from 'flarum/components/PostStream';

var onlyStarter = false;

function checkFP(post) {
    const firstPost = post.discussion().firstPost();
    if (firstPost) {
      return (firstPost.id() !== post.id());
    } else {
      return true;
    }
}

export default function () {

    var textOnlyStarter = app.translator.trans('swaggymacro.forum.only_starter');
    var textNotOnlyStarter = app.translator.trans('swaggymacro.forum.not_only_starter');
    
    $(function(){
        $("body").delegate(".OnlyStarter", "click", function(){
            if (!onlyStarter){
                $(".CommentPost").each(function(){
                    try{
                        $(this).find('.PostUser .topicStarter')[0].className;
                    }catch(e){
                        if ($(this).parent().attr("data-index") != 0){
                            $(this).css("display", "none");
                        }
                    }
                });
                onlyStarter = true;
                $(".OnlyStarter span").text(textNotOnlyStarter);
            }else{
                $(".CommentPost").each(function(){
                    $(this).css("display", "block");
                });
                onlyStarter = false;
                $(".OnlyStarter span").text(textOnlyStarter);
            }
        });
    });

    extend(PostStream.prototype, 'oninit', function () {
        onlyStarter = false;
    });

    extend(PostUser.prototype, 'view', function (vnode) {
        if (app.forum.attribute('showTopicStarter') == 0) return;
        const routeName = app.current.get('routeName');
    
        if (routeName === 'discussion' || routeName === 'discussion.near' || routeName === 'blogArticle') {
    
          const labelText = (routeName === 'blogArticle') ? app.translator.trans('swaggymacro.forum.blog_article_author') : app.translator.trans('swaggymacro.forum.topic_starter');
          const post = this.attrs.post;
    
          if (!post.user().id) return;
    
          const postAuthor = post.user().id();
    
          if (!post.discussion().user().id) return;
    
          const discussionAuthor = post.discussion().user().id();
    
          if (!discussionAuthor && !postAuthor) {
            return;
          }
    
          if (postAuthor === discussionAuthor && checkFP(post)) {
            vnode.children.push(
              <span className="topicStarter">{labelText}</span>
            );
          }else{
            if (onlyStarter){
                $(".CommentPost").each(function(){
                    try{
                        $(this).find('.PostUser .topicStarter')[0].className;
                    }catch(e){
                        if ($(this).parent().attr("data-index") != 0){
                            $(this).css("display", "none");
                        }
                    }
                });
            }
          }
          
        }
      });

    extend(DiscussionPage.prototype, 'sidebarItems', function(items) {
        if (app.forum.attribute('onlyStarter') == 0) return;
        items.add(
            'OnlyStarter', 
                Button.component(
                    {
                      icon: 'fas fa-user',
                      className: 'Button OnlyStarter',
                      type: 'button'
                    },
                    textOnlyStarter
                  )

        );

        
        
    });
}
