import { signIn, providerMap } from 'auth'
import type { ReactNode } from 'react'

import { BsGoogle } from 'react-icons/bs'

const providerIcons: Record<string, ReactNode> = {
  Google: <BsGoogle />,
}

const icons = [{name: 'Google', icon: <BsGoogle />}]

const SignInPage = async () => {


return <h2>Acesse ou crie sua conta com uma das opcoes disponiveis</h2>

{ Object.values(providerMap).map((provider) => {
   return (
     <form
      key={provider.id}
       action={async () => {
      "use server";
      await signIn(provider.id, { redirectTo: "/" })

}}>
  <button>
    <span>Entrar com <strong>{provider.name}</strong></span>
  </button>

</form>

    )})}
} 

export default SignInPage

