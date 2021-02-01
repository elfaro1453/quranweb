class AppBar extends HTMLElement {
  set title (title) {
    this._title = title
    this.render()
  }

  get title () {
    return this._title
  }

  render () {
    this.innerHTML = `
    <div class="bg-green-200 rounded shadow sticky top-0">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex-1 flex items-center justify-center">
          <div class="flex-shrink-0 flex items-center uppercase text-2xl md:text-3xl quran-ayah">
            ${this._title}
          </div>
        </div>
      </div>
    </div>
  </div>`
  }
}

customElements.define('app-bar', AppBar)
