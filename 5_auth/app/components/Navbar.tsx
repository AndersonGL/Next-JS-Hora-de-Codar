import {auth,signIn,signOut} from "auth"
import Link from "next/link";

const Navbar = async () => {

    const sessions = await auth();

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-white text-lg font-bold">Home</Link> 
       <div>
        {sessions && sessions.user ? (
            //logado
            <div className=" flex gap-4 items-center"> 
                {/* login social => name, email, thumb, image */}
                <p>Bem vindo,  {sessions.user.name}</p>
                  <form action={async () =>{
                "use server"
                await signOut();
            }}>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Sair</button>
            </form>
            </div>
        ) : (
            //deslogado
            <form action={async () =>{
                "use server"
                await signIn();
            }}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Entrar</button>
            </form>
        )}
        </div>
    </div>
  )
}

export default Navbar