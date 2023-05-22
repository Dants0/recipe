import { Recipes } from '@/components/Recipes'

export default function Home() {
  return (
    <main className='flex flex-col items-center min-h-screen w-screen gap-10 p-2 m-4'>
      <h1>Site de Receitas</h1>
      <p>Luana te amo</p>
      <Recipes/>
    </main>
  )
}
