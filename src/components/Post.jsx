import styles from "./Post.module.css";
export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/MedeirosCode.png"
          />
          <div className={styles.authorInfo}>
            <strong>Christian Medeiros</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Lorem, ipsum. 👋</p>
        <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae molestias consectetur alias, exercitationem dolorum quia totam voluptas neque maiores a laboriosam aspernatur! Vero porro similique atque odit aliquam, culpa accusamus!        </p>
        <p>
          {" "}
          👉<a href="https://github.com/MedeirosCode" target="_blank" > Github medeiroscode </a>{" "}
        </p>
        <p>
          {" "}
          <a href="#"> #novoprojeto</a>   {" "}
          <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
        placeholder="Deixe  um comentario"
        />

        <footer>

       <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
};
