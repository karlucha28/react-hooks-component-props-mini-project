import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
   
    return(
        //jsx

        <main>
            {/* <Article date={posts[0].date} title={posts[0].title} prewiew={posts[0].prewiew}/>
            <Article  date={posts[0].date} title={posts[0].title} prewiew={posts[0].prewiew}/> */}
            { 
            posts.map((posts,i) => {
                return <Article key={i} date={posts.date} title={posts.title} prewiew={posts.prewiew}/>
            })
            }
        </main>
        // <aside>
        //     <img  src={image}  alt="blog logo"></img>
        //     <p>
        //         {about}
        //     </p>
        // </aside>
    )
}

export default ArticleList