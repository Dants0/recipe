"use client"
import { routes } from '@/routes/routes'
import axios from 'axios'
import Image from 'next/image'
import { Key, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

interface RecipesInstance {
  idMeal: Key | null | undefined
  map(arg0: (item: any) => import("react").JSX.Element): import("react").ReactNode
  filter(arg0: (item: any) => import("react").JSX.Element): import("react").ReactNode
  forEach(arg0: (item: any) => import("react").JSX.Element): import("react").ReactNode
  strMeal: string
}

export function Recipes() {

  const [recipes, setRecipes] = useState<RecipesInstance>([])

  useEffect(() => {
    try {
      axios.get(routes.randomRecipe).then(response => setRecipes(response.data.meals))
    } catch (e) {
      throw e
    }
  }, [])

  return (
    <div className='flex flex-col items-center justify-center w-4/5'>
      <div key={recipes.idMeal} className='gap-5 flex rounded-md bg-slate-300 flex-col w-4/5 p-2 justify-center items-center'>
        {recipes.map(item => {
          return (
            <>
              <h2 className='underline text-center text-white font-bold'>Receita: {item.strMeal}</h2>
              <Image
                src={item.strMealThumb}
                width={400}
                height={400}
                alt='mealThumbnail'
                className='w-[600px] h-[500px] flex justify-center rounded-sm'
              />
              <p>Categoria: {item.strCategory}</p>
              <p>Origem: {item.strArea}</p>
              <a href={item.strSource} className='text-center text-orange-200 bg-amber-950 h-10 flex justify-center items-center p-2 rounded-md hover:text-orange-500 transition-colors' target='_blank'>Clique aqui para ver a receita completa.</a>
              <ReactPlayer url={item.strYoutube} />
            </>
          )
        })}
      </div>
    </div>
  )
}