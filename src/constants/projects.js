// Weststation
import thumbWeststation from '../assets/images/thumbs/weststation.webp'
import west1 from '../assets/images/fulls/weststation/1.webp'
import west2 from '../assets/images/fulls/weststation/2.webp'
import west3 from '../assets/images/fulls/weststation/3.webp'
// Rozebeke
import thumbRozebeke from '../assets/images/thumbs/rozebeke.webp'
import rozebeke1 from '../assets/images/fulls/rozebeke/1.webp'
import rozebeke2 from '../assets/images/fulls/rozebeke/2.webp'
import rozebeke3 from '../assets/images/fulls/rozebeke/3.webp'
import rozebeke4 from '../assets/images/fulls/rozebeke/4.webp'
// Hotel Palace
import thumbHotelPalace from '../assets/images/thumbs/hotelpalace.webp'
import hotel3 from '../assets/images/fulls/hotelpalace/3.webp'
import hotel4 from '../assets/images/fulls/hotelpalace/4.webp'
import hotel5 from '../assets/images/fulls/hotelpalace/5.webp'
// Urban Design
import thumbUrbanDesign from '../assets/images/thumbs/urbandesign.webp'
import urban1 from '../assets/images/fulls/urbandesign/1.webp'
import urban2 from '../assets/images/fulls/urbandesign/2.webp'
import urban3 from '../assets/images/fulls/urbandesign/3.webp'
import urban4 from '../assets/images/fulls/urbandesign/4.webp'

export default [
  {
    id: 'Rozebeke',
    additionalImages: [
      { src: thumbRozebeke },
      { src: rozebeke1 },
      { src: rozebeke2 },
      { src: rozebeke3 },
      { src: rozebeke4 },
    ],
    thumbnail: thumbRozebeke,
    caption: 'Cohousing Rozebeke',
    description: '2016',
  },
  {
    id: 'UrbanDesign',
    additionalImages: [
      { src: thumbUrbanDesign },
      { src: urban1 },
      { src: urban2 },
      { src: urban3 },
      { src: urban4 },
    ],
    thumbnail: thumbUrbanDesign,
    caption: 'Urban design',
    description: '2017',
  },
  {
    id: 'Weststation',
    additionalImages: [
      { src: thumbWeststation },
      { src: west1 },
      { src: west2 },
      { src: west3 },
    ],
    thumbnail: thumbWeststation,
    caption: 'Weststation',
    description: '2018',
  },
  {
    id: 'HotelPalace',
    additionalImages: [
      { src: thumbHotelPalace },
      { src: hotel3 },
      { src: hotel4 },
      { src: hotel5 },
    ],
    thumbnail: thumbHotelPalace,
    caption: 'Hotel Palace',
    description: '2019',
  },
]
