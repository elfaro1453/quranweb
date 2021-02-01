class SurahItem extends HTMLElement {
  set surahItem (surahitem) {
    this._surahitem = surahitem
    this.render()
  }

  get surahItem () {
    return this._surahitem
  }

  render () {
    this.innerHTML = `
      <div class="border border-green-600 shadow hover:shadow-lg hover:bg-green-50 rounded-md p-2 h-full">
        <div class="flex">
          <div class="flex-1 py-1">
            <div class="text-2xl md:text-4xl text-center quran-ayah" dir="rtl">${this._surahitem.asma}</div>
            <div class="text-center italic">${this._surahitem.number}. ${this._surahitem.name}</div>
            <div class="text-sm text-center">(${this._surahitem.translationId})</div>
            <div class="hidden md:block text-sm text-center uppercase">${this._surahitem.typeId} | ${this._surahitem.numberOfAyahs} Ayat</div>
          </div>
          <div class="flex w-1/4">
            <a href="detail.html?surah=${this._surahitem.number}" class="flex">
              <div class="rounded-full bg-green-400 hover:bg-green-600 shadow hover:shadown-xl h-12 w-12 mx-auto my-auto p-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="grey">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>`
  }
}

customElements.define('surah-item', SurahItem)
