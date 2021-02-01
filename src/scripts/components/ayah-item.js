import { toArabic } from 'arabic-digits'

class AyahItem extends HTMLElement {
  set ayahItem (ayahitem) {
    this._ayahitem = ayahitem
    this.render()
  }

  get ayahItem () {
    return this._ayahitem
  }

  render () {
    this.innerHTML = `
    <div class="border border-green-600 shadow rounded-md p-2 h-full">
      <div class="flex space-x-4">
        <div class="flex-1 py-1">
          <div class="h-auto text-2xl md:text-3xl text-right quran-ayah" dir="rtl">${this._ayahitem.ayahText}</div>
          <div class="text-xs md:text-sm text-justify">${this._ayahitem.indoText}</div>
        </div>
        <div class="grid max-w-xs">
          <div class="rounded-full bg-green-600 h-10 w-10 mx-auto my-auto flex">
                <span class="text-xl text-white mx-auto my-auto">${toArabic(this._ayahitem.verseId, true)}</span>
          </div>
        </div>
      </div>
    </div>  
    `
  }
}

customElements.define('ayah-item', AyahItem)
