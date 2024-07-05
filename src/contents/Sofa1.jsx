import sofa1Img from '../assets/sofa1.png'
import { useTranslation } from 'react-i18next'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Sofa1() {

  const [t, i18next] = useTranslation()

  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])

  return (
    <div className='container py-10'>
        <div className='rounded-[25px] my-20 hover:shadow-[0_35px_60px_-15px_rgba(255,0,0,0.6)]' style={{background: 'linear-gradient(#656466, #94879E, #544D5A)'}}>
          <div className='text-center md:text-left text-white flex flex-col md:flex-row items-center justify-around px-10 py-10 md:py-0'>

            {/* Sofa image */}
            <div className='order-1 md:basis-1/4 md:order-2' data-aos='fade-down'>
              <img className='h-[300px] scale-x-[1.2] scale-y-[1.3] md:scale-y-[1.4] lg:scale-y-[1.6] translate-y-[-80px] md:translate-y-[0]' src={sofa1Img} alt='sofa image' />
            </div>

            {/* 100% */}
            <div className='order-2 md:basis-1/4 md:order-1' data-aos='fade-up'>
              <p className='font-bold text-4xl md:text-6xl xl:text-8xl xl:font-black'>{t('sofa.percent')}</p>
              <p className='md:text-3xl'>{t('sofa.p1')}</p>
            </div>
            
            {/* Info */}
            <div className='order-3 md:basis-2/4 pl-5 xl:pl-0' data-aos='fade-up'>
              <p className='font-bold text-3xl'>{t('sofa.p2')}</p>
              <p className='md:text-xl'>{t('sofa.p3')}</p>
              <button className='serbtn bg-white rounded-[50px] text-black font-bold py-3 px-10 mt-10'>{t('sofa.btn')}</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sofa1