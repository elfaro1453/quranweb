import './surah-item.js'

class SurahList extends HTMLElement {
  set surahList (surahList) {
    this._surahList = surahList
    this.render()
  }

  get surahList () {
    return this._surahList
  }

  render () {
    const surahListElement = document.createElement('div')
    surahListElement.classList = 'container grid sm:grid-cols-3 lg:grid-cols-4 gap-2 p-2 mx-auto'

    this._surahList.forEach(surahItem => {
      const surahItemElement = document.createElement('surah-item')
      surahItemElement.surahItem = surahItem
      surahListElement.appendChild(surahItemElement)
    })
    this.appendChild(surahListElement)
  }
}

customElements.define('surah-list', SurahList)
