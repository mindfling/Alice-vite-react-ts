import { HelloWorld } from "../HelloWorld/HelloWorld";
import style from "./MainContent.module.scss";

export const MainContent = () => {
  return (
    <main className={style.mainContent}>
      <h2 className={style.heading}>Основной контент здесь</h2>

      <HelloWorld />

      <p className={style.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        consectetur recusandae saepe sit veritatis. Repellendus itaque fugit,
        quia autem magni facilis vitae animi eligendi! Dolorum commodi quisquam
        eius! Corporis, deleniti?
      </p>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        aliquam suscipit modi fuga totam? Natus iure doloribus, officiis,
        sapiente, exercitationem rem voluptatum error delectus illo
        necessitatibus officia dignissimos. Aspernatur, molestiae! Praesentium
        nemo vero maiores maxime a culpa, obcaecati facere hic veritatis, alias
        cumque ab aspernatur? Unde nisi tempora et inventore dolorum beatae
        porro! Assumenda dolores nesciunt placeat? Sed, commodi velit. Ea
        aspernatur, obcaecati deserunt accusantium saepe doloremque reiciendis
        quos nemo non consequuntur optio nostrum incidunt, explicabo fugiat
        eaque alias necessitatibus eos qui iusto repellat, soluta distinctio
        deleniti eius quaerat. Dolore!
      </p>
      <p>
        Qui quos nemo commodi. Sint totam expedita maxime neque quo nisi maiores
        tenetur deserunt mollitia voluptas consequuntur dolore excepturi
        repellendus quod ipsam, recusandae 
        blanditiis rem eligendi dignissimos tempore quod culpa laborum provident
        labore officia quibusdam maxime. Omnis accusantium corporis distinctio,
        pariatur similique
      </p>
    </main>
  );
};
