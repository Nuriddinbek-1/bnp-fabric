import { useTranslation } from "react-i18next"

function Languages() {

  const [t, i18next] = useTranslation()

  const languages = localStorage.getItem('i18nextLng')

  const changeLang = (e) => {
    const selectedLanguage = e.target.value
    i18next.changeLanguage(selectedLanguage)
  }

  return (
    <div className='fixed top-0 right-20'>
        <select name="changeLang" id="lang" value={languages} onChange={changeLang}>
            <option value="uz">O'zbekcha</option>
            <option value="en">English</option>
            <option value="ru">Русский</option>
        </select>
    </div>
  )
}

export default Languages