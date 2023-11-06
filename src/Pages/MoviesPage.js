import React from 'react'
import NavBAr from '../components/NavBar'
import PhotoCrausal from '../components/PhotoCrausal'
import Movies from '../components/Movies'

function MoviesPage() {
  const photos =[
    {url: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1698931897748_mindfoolvirdasdesktop.jpg'},
    {url: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1697784852917_edsheerandesktoprevised.jpg'},
    {url: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1698603955302_web.jpg'},
    {url: 'https://wallpapercave.com/wp/wp8872767.jpg'},
    {url: 'https://deadline.com/wp-content/uploads/2023/10/et00313411-sfmzjuvwzp-landscape.jpg?w=1024'},
    {url: 'https://cdn.siasat.com/wp-content/uploads/2023/09/animal-660x495.jpg'},

  ]
  return (
    <div>
      <NavBAr/>
      <PhotoCrausal photo={photos}/>
      <Movies/>

    </div>
  )
}

export default MoviesPage