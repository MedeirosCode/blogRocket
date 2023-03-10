import styles from "./Sidebar.module.css";
import { PencilSimpleLine } from "@phosphor-icons/react";

export function Sidebar() {
  return (
    <div>
      <aside className={styles.sidebar}>
        <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
          alt=""
        />

        <div className={styles.profile}>
          <img
            className={styles.avatar}
            src="https://github.com/MedeirosCode.png"
            alt=""
          />
          <strong> Christian medeiros</strong>
          <span>Web Developer</span>
        </div>
        <footer>
          <a href="#">
            {" "}
            <PencilSimpleLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </div>
  );
}