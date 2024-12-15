import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "./gallery.css"

export default function WovenImageList() {
  return (
    <>
   <div style={{width:"50%"}} className='title_container m-3'> <h2 >Club Media</h2></div>
    <ImageList className='gallery_container m-3' sx={{ width: 800, height: 800 }} variant="woven" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=161&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </>
  );
}

const itemData = [
  {
    img: '/IMAGES/gallery/gallery-img-2.jpg',
    title: 'Bed',
  },
  {
    img: '/IMAGES/gallery/gallery-img-3.jpg',
    title: 'Kitchen',
  },
  {
    img: '/IMAGES/gallery/gallery-img-4.jpg',
    title: 'Sink',
  },
  {
    img: '/IMAGES/gallery/gallery-img-5.jpg',
    title: 'Books',
  },
  {
    img: '/IMAGES/gallery/gallery-img-6.jpg',
    title: 'Chairs',
  },
  {
    img: '/IMAGES/gallery/gallery-img-7.jpg',
    title: 'Candle',
  },
  {
    img: '/IMAGES/gallery/gallery-img-8.jpg',
    title: 'Laptop',
  },
  {
    img: '/IMAGES/gallery/gallery-img-9.jpg',
    title: 'Doors',
  },
  {
    img: '/IMAGES/gallery/gallery-img-1.jpg',
    title: 'Coffee',
  },
  {
    img: '/IMAGES/gallery/fixture-gallery-img3.jpg',
    title: 'Storage',
  },

];
