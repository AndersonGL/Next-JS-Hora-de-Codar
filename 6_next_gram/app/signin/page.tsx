import { signIn, providerMap } from 'auth'
import type { ReactNode } from 'react'

import { BsGoogle } from 'react-icons/bs'

const providerIcons: Record<string, ReactNode> = {
  Google: <BsGoogle />,
}

const icons = [{name: 'Google', icon: <BsGoogle />}]

const SignInPage = async () => {

  const findIcon = (name: string) => {
    const icon = icons.find((icon) => icon.name === name)
    return icon ? icon.icon : null
  }

  return (
    <div className="w-1/2 mx-auto my-1 px-4 flex flex-col gap-2">
      <h2 className='text-[2rem] leading-10 font-semibold text-center'>Acesse ou crie sua conta
         com uma das opções disponiveis</h2>

      {Object.values(providerMap).map((provider) => {
        return (
          <form
            key={provider.id}
            action={async () => {
              "use server"
              await signIn(provider.id, { redirectTo: "/" })
            }}

          className="my-10 flex justify-center items-center"

          >
            <button className="h-10 px-6 py-1 font-mediu border border-zinc-600 flex items-center gap-2 roundend hover:bg-slate-50">
              {findIcon(provider.name)}
              <span>Entrar com <strong>{provider.name}</strong></span>
            </button>
          </form>
        )
      })}
    </div>
  )
}

export default SignInPage

