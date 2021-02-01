import '../styles/styles.css'
import '../scripts/components/banner-bar.js'
import '../scripts/components/app-bar.js'
import '../scripts/components/ayah-list.js'
import '../scripts/components/placeholders/loading-bar.js'

const getQuery = (variable) => {
  const query = window.location.search.substring(1)
  const vars = query.split('&')
  let i = 0
  for (; i < vars.length; i++) {
    const pair = vars[i].split('=')
    if (pair[0] === variable) { return pair[1] }
  }
  return false
}

const header = () => {
  const headerElement = document.createElement('header')
  const bannerBar = document.createElement('banner-bar')
  headerElement.appendChild(bannerBar)
  return headerElement
}

const divRoot = () => {
  const query = getQuery('surah')

  const root = document.createElement('div')
  root.id = 'container'
  root.classList = 'container-2xl mx-auto'
  document.body.appendChild(root)

  root.appendChild(header())

  const main = document.createElement('div')
  main.id = 'main'
  root.appendChild(main)

  const loadingBar = document.createElement('loading-bar')
  loadingBar.title = 'Memuat Detail Surah..'
  main.appendChild(loadingBar)

  fetch(`/surah/${query}`)
    .then(response => {
      return response.json()
    }).then(responseJson => {
      const appBar = document.createElement('app-bar')
      appBar.title = responseJson.asma
      document.title = responseJson.name
      main.replaceChild(appBar, loadingBar)
      const ayahListElement = document.createElement('ayah-list')
      ayahListElement.detailSurah = responseJson
      main.appendChild(ayahListElement)
    }).catch(error => {
      console.log(error)
    })
}

document.addEventListener('DOMContentLoaded', () => {
  divRoot()
})
