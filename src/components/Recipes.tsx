"use client"
import { routes } from '@/routes/routes'
import axios, { all } from 'axios'
import Image from 'next/image'
import { list } from 'postcss'
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


  console.log(recipes)

  const allIngredients : string[] = []

  recipes.forEach((recipe: any)=>{
    for(let i = 0; i <= 10; i++){
      const ingKey = `strIngredient${i}`
      const ingred = recipe[ingKey]
      if(ingred){
        allIngredients.push(ingred)
      }else{
        break;
      }
    }
  })

  console.log(allIngredients)


  return (
    <div className='flex flex-col border-r-slate-900 items-center justify-center'>
      <div key={recipes.idMeal} className='gap-5 flex rounded-md flex-col w-4/5 bg-slate-400 p-2 justify-center items-center'>
        {recipes.map(item => {
          return (
            <>
              <h2 className='underline text-center text-white font-bold'>Receita: {item.strMeal}</h2>
              <Image
                src={item.strMealThumb}
                width={400}
                height={400}
                alt='mealThumbnail'
                className='w-100 flex justify-center'
              />
              <p>Categoria: {item.strCategory}</p>
              <p>Origem: {item.strArea}</p>
              <p>{item.strInstructions}</p>
              <ReactPlayer url={item.strYoutube} />
            </>
          )
        })}
      </div>
    </div>
  )
}