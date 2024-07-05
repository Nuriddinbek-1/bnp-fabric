import servicesShipping from '../assets/servicesShipping.svg'
import servicesGaurantee from '../assets/servicesGaurantee.svg'
import servicesSupport from '../assets/servicesSupport.svg'
import servicesPayment from '../assets/servicesPayment.svg'
import { useTranslation } from 'react-i18next'

function Services() {

  const [t, i18next] = useTranslation()

  return (
    <div className='container'>

        {/* SERVICES */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
          <div className='md:flex'>
            <div>
              <img className='mx-auto' src={servicesShipping} alt='shipping truck' width={100} />
            </div>
            <div className='flex flex-col justify-center'>
              <h3 className='font-bold'>{t('services.shippingTitle')}</h3>
              <p>{t('services.shippingInfo')}</p>
            </div>
          </div>
          <div className='md:flex'>
            <div>
              <img className='mx-auto' src={servicesGaurantee} alt='shipping truck' width={100} />
            </div>
            <div className='flex flex-col justify-center'>
              <h3 className='font-bold'>{t('services.guaranteeTitle')}</h3>
              <p>{t('services.guaranteeInfo')}</p>
            </div>
          </div>
          <div className='md:flex'>
            <div>
              <img className='mx-auto' src={servicesSupport} alt='shipping truck' width={100} />
            </div>
            <div className='flex flex-col justify-center'>
              <h3 className='font-bold'>{t('services.supportTitle')}</h3>
              <p>{t('services.supportInfo')}</p>
            </div>
          </div>
          <div className='md:flex'>
            <div>
              <img className='mx-auto' src={servicesPayment} alt='shipping truck' width={100} />
            </div>
            <div className='flex flex-col justify-center'>
              <h3 className='font-bold'>{t('services.paymentTitle')}</h3>
              <p>{t('services.paymentInfo')}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Services