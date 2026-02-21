import Image from "next/image";
import styles from './page.module.css'

export default function Home() {
  return (
    
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         {/* 1 -  CSS Global */}
         <h1>Meu titulo</h1>
         {/* 2- CSS Modules */}
         <h2 className={styles.heading_module}>Meu Css Modules</h2>
         <div className={styles.container}>
          <p>Testando CSS Modules</p>
         </div>
          <div className={styles.container}>
            <h3>Teste</h3>
          </div>
       
      </main>
  
  );
}









