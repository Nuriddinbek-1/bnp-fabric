import logo from '../assets/logo.png'
import { useTranslation } from 'react-i18next'

function Footer() {

    const [t, i18n] = useTranslation()

  return (
    <div className='bg-gray-200 pt-5'>
        <div className='container py-5'>
            <div className='grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                <div>
                    <img src={logo} alt="logo" width={'150px'}/>
                    <p className='my-5'>{t('footer.card1.title')}</p>
                </div>
                <div>
                    <h3 className='mt-5 sm:mt-0 sm:mb-5 text-2xl font-semibold'>{t('footer.card2.title')}</h3>
                    <p>{t('footer.card2.text1')}</p>
                    <p>{t('footer.card2.text2')}</p>
                    <p>{t('footer.card2.text3')}</p>
                    <p>{t('footer.card2.text4')}</p>
                </div>
                <div>
                    <h3 className='mt-5 sm:mb-5 md:mt-0 text-2xl font-semibold'>{t('footer.card3.title')}</h3>
                    <p>{t('footer.card3.text1')}</p>
                    <p>{t('footer.card3.text2')}</p>
                    <p>{t('footer.card3.text3')}</p>
                    <p>{t('footer.card3.text4')}</p>
                    <p>{t('footer.card3.text5')}</p>
                </div>
            </div>
        </div>

        <div className='bg-black py-5'>
          <div className='container'>
            <p className='text-white'>{t('footer.bottom')}</p>
          </div>
        </div>
    </div>
  )
}

export default Footer