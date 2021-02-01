class LoadingBar extends HTMLElement {
  set title (title) {
    this._title = title
    this.render()
  }

  get title () {
    return this._title
  }

  render () {
    this.innerHTML = `
  <div class="flex justify-around p-4">
    <span class="inline-flex rounded-md shadow-sm bg-green-600">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-rose-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 cursor-not-allowed" disabled="">
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="white" stroke-width="4"></circle>
          <path class="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        ${this._title}
      </button>
    </span>
  </div>`
  }
}

customElements.define('loading-bar', LoadingBar)
