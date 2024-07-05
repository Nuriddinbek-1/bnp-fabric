import { useTranslation } from "react-i18next"
import products from "./Data"

function WinterColl() {

  const [t, i18next] = useTranslation()

  return (
    <div className="container">

      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">{t('winter.title')}</h2>
        <p>{t('winter.subtitle')}</p>
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

export default WinterColl