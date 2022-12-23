import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One punch'])

  // No hacer push en react, react evita las mutaciones
  const onAddCategory = (newCategory) =>{

    if (categories.includes(newCategory)) return;
    setCategories([newCategory,...categories]);
    
  }

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory
        onNewCategory = {(onAddCategory)}
        
      />

      {categories.map( (category) =>{
        return <GifGrid 
        key={category} 
        category = {category}></GifGrid>
      })}
      
      
    </>
  )
}
