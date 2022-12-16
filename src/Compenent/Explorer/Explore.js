import React from 'react'
import './Explore.css'
import explore_item from '../../images/card img.png'
import explore_item2 from '../../images/mark.jpg'
import explore_item3 from '../../images/web.jpg'
import explore_item4 from '../../images/game2.jpg'
import explore_item5 from '../../images/PACK.jpg'
import explore_item6 from '../../images/illu.jpg'
import explore_item7 from '../../images/typo.jpg'
import explore_item8 from '../../images/motion 2.jpg'
import explore_item9 from '../../images/illu2.jpg'
import explore_item10 from '../../images/social media.jpg'
import explore_item11 from '../../images/illu3.jpg'
import explore_item12 from '../../images/motion3.jpg'

import { ExploreCard } from '../ExploreCard'

const infos =[
  {img:explore_item , name:'Guest 1',logo:'A' },
  {img:explore_item2 , name:'Guest 12',logo:'A' },
  {img:explore_item3 , name:'Guest 123',logo:'A' },
  {img:explore_item4 , name:'Guest 1234',logo:'A' },
  {img:explore_item5 , name:'Guest 1235',logo:'A' },
  {img:explore_item6 , name:'Guest 1236',logo:'A' },
  {img:explore_item7 , name:'Guest 1237',logo:'A' },
  {img:explore_item8 , name:'Guest 1238',logo:'A' },
  {img:explore_item9 , name:'Guest 1239',logo:'A' },
  {img:explore_item10 , name:'Guest 12310',logo:'A' },
  {img:explore_item11 , name:'Guest 12311',logo:'A' },
  {img:explore_item12 , name:'Guest 12312',logo:'A' },
  
]
export const Explore = () => {
  const explors = infos.map(explore=><ExploreCard 
  img = {explore.img} 
  logo= {explore.logo}
  name = {explore.name}
  
  
  />)
  return (
        <div className="explore-main">
          
            
            <div className="start-explore">
                
  {explors}
            
                
            </div>
            

        </div>
        
  )
}
