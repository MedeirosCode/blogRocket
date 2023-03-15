import Header from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "../src/global.css";

const posts = [
  {
    id: 1,
    author: {
      authorUrl: "https://github.com/medeiroscode.png",
      name: "Christian Medeiros",
      role: "Developer Web",
    },
    content: [
      { type: "paragraph", content: "Lorem, ipsum. 👋," },
      { type: "paragraph",content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae molestias consectetur alias, exercitationem dolorum quia totam voluptas neque maiores a laboriosam aspernatur! Vero porro similique atque odit aliquam, culpa accusamus! ,",},
      { type: "link", content: "https://github.com/MedeirosCode" },
    ],
    publishedAt: new Date("2023-03-14 20:00:00"),
  },
  {
    id: 2,
    author: {
      authorUrl: "https://github.com/maykbrito.png",
      name: "mayk brito",
      role: "Dev @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Lorem, ipsum. 👋," },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae molestias consectetur alias, exercitationem dolorum quia totam voluptas neque maiores a laboriosam aspernatur! Vero porro similique atque odit aliquam, culpa accusamus! ,",
      },
      { type: "link", content: "https://github.com/MedeirosCode" },
    ],
    publishedAt: new Date("2023-03-10 20:00:00"),
  },
];
function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         {posts.map(post =>{
          return(
            <Post
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
            ) 
            
         })}
        </main>
      </div>
    </div>
  );
}

export default App;
