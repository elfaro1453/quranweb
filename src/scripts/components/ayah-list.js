import './ayah-item.js'

class AyahList extends HTMLElement {
  set detailSurah (detailsurah) {
    this._detailsurah = detailsurah
    this._ayahlist = detailsurah.ayahs
    this.render()
  }

  get detailSurah () {
    return this._detailsurah
  }

  render () {
    const surahDetailElement = document.createElement('div')
    surahDetailElement.classList = 'container grid sm:w-3/6 gap-2 p-2 mx-auto'

    if (this._detailsurah.number > 1) {
      const bismillah = document.createElement('div')
      bismillah.innerHTML = `
        <div class="flex space-x-4">
          <div class="flex-1 py-1">
            <div class="h-auto text-2xl md:text-3xl text-center quran-ayah" dir="rtl">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
          </div>
        </div>`
      surahDetailElement.appendChild(bismillah)
    }
    this.appendChild(surahDetailElement)
    this._ayahlist.forEach(ayahItem => {
      const ayahItemElement = document.createElement('ayah-item')
      ayahItemElement.ayahItem = ayahItem
      surahDetailElement.appendChild(ayahItemElement)
    })
  }
}

customElements.define('ayah-list', AyahList)
