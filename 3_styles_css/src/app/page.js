import Image from "next/image";
import styles from './page.module.css'
import MyComponent from './components/MyComponent'
import Container from './components/Container'
import Button from './components/Button'
import CustomButton from './components/CustomButton'

export default function Home() {
  return (
    
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         {/* 1- CSS Global */}
         <h1>Meu titulo</h1>
         {/* 2- CSS Modules */}
         <h2 className={styles.heading_module}>Meu Css Modules</h2>
         <div className={styles.container}>
          <p>Testando CSS Modules</p>
         </div>
         {/* 3- Tailwind CSS */}
         <MyComponent />
         {/* 4- SASS */}
          <Container />
          {/* 5- SASS com CSS Modules */}
          <Button />
          {/* 6- Styled Components */}
          <CustomButton>Clique Aqui</CustomButton>
        </main>
  
  );
}









