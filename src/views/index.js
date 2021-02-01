import '../styles/styles.css'
import '../scripts/components/banner-bar.js'
import '../scripts/components/surah-list.js'
import '../scripts/components/placeholders/loading-bar.js'

const header = () => {
  const headerElement = document.createElement('header')
  const bannerBar = document.createElement('banner-bar')
  headerElement.appendChild(bannerBar)
  return headerElement
}

const divRoot = () => {
  const root = document.createElement('div')
  root.id = 'container'
  root.classList = 'container-2xl mx-auto'
  document.body.appendChild(root)

  root.appendChild(header())

  const main = document.createElement('div')
  main.id = 'main'
  root.appendChild(main)

  const loadingBar = document.createElement('loading-bar')
  loadingBar.title = 'Memuat Daftar Surah..'
  main.appendChild(loadingBar)

  fetch('/surah')
    .then(response => {
      return response.json()
    }).then(responseJson => {
      return responseJson.data
    }).then(surahList => {
      const surahListElement = document.createElement('surah-list')
      surahListElement.surahList = surahList
      main.replaceChild(surahListElement, loadingBar)
    }).catch(error => {
      console.log(error)
    })
}

document.addEventListener('DOMContentLoaded', () => {
  divRoot()
})
