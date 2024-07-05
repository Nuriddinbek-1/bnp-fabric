import navImg from '../assets/nav.png'
import logo from '../assets/logo.png'
import menu from '../assets/menu.svg'
import x from '../assets/x.svg'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Navbar() {

  const [t, i18next] = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])

  return (
    <div className='container'>
      <div className='md:mb-20'>
        <nav>
          {/* DESKTOP */}
          <ul className='hidden md:flex leading-[50px] items-center'>
            <li className='mr-10'><img src={logo} alt='logo' width={200} /></li>
            <li className='mr-10'>{t('navbar.home')}</li>
            <li className='mr-10'>{t('navbar.collection')}</li>
            <li className='mr-10'>{t('navbar.about')}</li>
            <li className='mr-10'>{t('navbar.contact')}</li>
          </ul>

          {/* MOBILE */}
          <div className='flex justify-between md:hidden'>
            <div>
              <img src={logo} alt='logo' width={150} />
            </div>
            <div>
              <img src={menu} alt='open menu' width={30} onClick={() => setIsOpen(true)}/>
            </div>
          </div>

          {/* MOBILE OPEN MENU */}
          <div className={`fixed top-0 right-0 bottom-0 left-0 bg-white z-50 text-center flex flex-col ${isOpen ? '' : 'hidden'} md:hidden`}>
            <div className='flex justify-around my-5'>
              <img src={x} alt='close menu' width={30} onClick={() => setIsOpen(false)}/>
            </div>
            <div>
              <ul className='flex flex-col'>
                <li className='mb-5'>{t('navbar.home')}</li>
                <li className='mb-5'>{t('navbar.collection')}</li>
                <li className='mb-5'>{t('navbar.about')}</li>
                <li className='mb-5'>{t('navbar.contact')}</li>
              </ul>
            </div>
          </div>
        </nav>

        {/* NAV IMAGE */}
        <div className='grid grid-cols-2 bg-zinc-700 rounded-[25px] my-5 pt-5 md:pt-20 pr-5' data-aos='zoom-out'>
          <div className='relative'>
            <img className='scale-x-[1.1] scale-y-[1.2]' src={navImg} alt='nav image' />
          </div>
          <div className='flex flex-col text-white font-bold text-right overflow-hidden'>
            <p className='text-xl sm:text-3xl md:text-5xl xl:text-[50px]'>{t('navbar.slogan1')}</p>
            <p className='text-3xl sm:text-5xl md:text-7xl xl:text-[100px]'>{t('navbar.slogan2')}</p>
            <p className='text-5xl sm:text-7xl md:text-9xl xl:text-[170px]'>{t('navbar.slogan3')}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar