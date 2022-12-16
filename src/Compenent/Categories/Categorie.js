import React from 'react'
import first_item from '../../images/ui-ux-design.jpg';
import second_item from '../../images/digital marketing.jpg'
import third_item from '../../images/packaging design.jpg'
import fourth_item from '../../images/illustration.jpg'
import fifth_item from '../../images/typographie.jpg'
import sixth_item from '../../images/web design.jpg'
import seventh_item from '../../images/game design.jpg'
import eighth_item from '../../images/motion.jpg'

import { Card } from '../Card/Card';
import '../Categories/categorie.css';
const infos = [
  {img: first_item, title:'UI DESIGN' , review:'4,2'},
  {img: second_item , title :'MARKETING DESIGN', review :'3,1'},
  {img: third_item , title :'PACKAGING DESIGN', review :'2,4'},
  {img: fourth_item , title :'ILLUSTARTION', review :'3,1'},
  {img: fifth_item , title :'PUBLICATION & TYPOGRAPHIE', review :'3,1'},
  {img: sixth_item , title :'WEB DESIGN', review :'3,1'},
  {img: seventh_item , title :'GAME DESIGN', review :'3,1'},
  {img: eighth_item , title :'MOTION GRAPHIC DESIGN', review :'3,1'},
  

]

export const Categories = () => {
  const categories = infos.map(categorie=><Card
  imgSrc={categorie.img}
  review = {categorie.review}
  title = {categorie.title}
  />
    
    
    
    
    )
  return (
    <div className='start-categories'>
      <h3>CATEGORIES</h3>
      <div className="categories">
         
  {categories}
       
      </div>
    </div>
      
    
  )
}
export default Categories