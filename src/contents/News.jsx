import news1Img from '../assets/news-1.png'
import news2Img from '../assets/news-2.png'
import news3Img from '../assets/news-3.png'

import { useTranslation } from "react-i18next"

function News() {

  const [t, i18next] = useTranslation()

  return (
    <div className='container pb-10'>

      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">{t('news.title')}</h2>
        <p>{t('news.subtitle')}</p>
      </div>

      {/* Grid of products */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="font-semibold">
          <img src={news1Img} alt="news1" />
          <span className='leading-10'>{t('news.card1.date')}</span>
          <p className='text-2xl font-bold my-5'>{t('news.card1.title')}</p>
          <p className='text-xl'>{t('news.card1.info')}</p>
        </div>

        <div className="font-semibold">
          <img src={news2Img} alt="news2" />
          <span className='leading-10'>{t('news.card2.date')}</span>
          <p className='text-2xl font-bold my-5'>{t('news.card2.title')}</p>
          <p className='text-xl'>{t('news.card2.info')}</p>
        </div>

        <div className="font-semibold">
          <img src={news3Img} alt="news3" />
          <span className='leading-10'>{t('news.card3.date')}</span>
          <p className='text-2xl font-bold my-5'>{t('news.card3.title')}</p>
          <p className='text-xl'>{t('news.card3.info')}</p>
        </div>
      </div>

    </div>
  )
}

export default News