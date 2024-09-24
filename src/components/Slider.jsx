import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const Slider = () => {
  const images = [
    {
      original:'/img/originals/1.webp',
      thumbnail:'/img/thumbnails/small_1.webp'
    },
    {
      original:'/img/originals/2.webp',
      thumbnail:'/img/thumbnails/small_2.webp'
    },
    {
      original:'/img/originals/3.webp',
      thumbnail:'/img/thumbnails/small_3.webp'
    },
    {
      original:'/img/originals/4.webp',
      thumbnail:'/img/thumbnails/small_4.webp'
    },
    {
      original:'/img/originals/5.webp',
      thumbnail:'/img/thumbnails/small_5.webp'
    },
    {
      original:'/img/originals/6.webp',
      thumbnail:'/img/thumbnails/small_6.webp'
    },
    {
      original:'/img/originals/7.webp',
      thumbnail:'/img/thumbnails/small_7.webp'
    },
    {
      original:'/img/originals/8.webp',
      thumbnail:'/img/thumbnails/small_8.webp'
    },
    {
      original:'/img/originals/9.webp',
      thumbnail:'/img/thumbnails/small_9.webp'
    },
    {
      original:'/img/originals/10.webp',
      thumbnail:'/img/thumbnails/small_10.webp'
    },
    {
      original:'/img/originals/11.webp',
      thumbnail:'/img/thumbnails/small_11.webp'
    },
    {
      original:'/img/originals/12.webp',
      thumbnail:'/img/thumbnails/small_12.webp'
    },
  ];

  

  return(
    <div className='galeria' >
      <h3 className='galeria-title'>Galería </h3>
      <ImageGallery
        lazyLoad={true}
        items={images}
        showPlayButton={false}
        showFullscreenButton={true}
        showThumbnails={true}
        showBullets={false}
        showNav={false}
        autoPlay={true}
        slideDuration={1000}
      />
    </div>
  )
};

export default Slider;
