var posts=["2024/09/06/clion_cubemx/","2024/08/29/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };