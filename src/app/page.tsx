import { Recipes } from '@/components/Recipes'

export default function Home() {
  return (
    <main className='flex flex-col items-center min-h-screen gap-10 p-2 m-2'>
      <header className='w-full border-b-2 h-10 flex justify-center'>
        <h1 className='font-bold text-lg'>Site de Receitas</h1>
      </header>
      <Recipes/>
    </main>
  )
}
