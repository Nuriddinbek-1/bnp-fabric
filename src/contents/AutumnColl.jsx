import { useTranslation } from "react-i18next"
import products from "./Data"

function AutumnColl() {

  const [t, i18next] = useTranslation()

  return (
    <div className="container md:pt-20 md:pb-20 pb-10">

      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">{t('autumn.title')}</h2>
        <p>{t('autumn.subtitle')}</p>
      </div>

      {/* Grid of products */}
      <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {products[0].map((product, i) => {
          return (
            <div key={i} className="hover:font-semibold">
              <img src={product.img} alt="" />
              <span className="text-2xl">{product.name}</span>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default AutumnColl