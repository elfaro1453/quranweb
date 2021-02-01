class BannerBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
<nav class="bg-green-50">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="flex-1 flex items-center justify-center">
        <div class="flex-shrink-0 flex items-center">
          <a href="/"><img class="h-8 w-auto" src="../images/logo.png" alt="QuranWeb"></a>
        </div>
      </div>
    </div>
  </div>
</nav>`
  }
}

customElements.define('banner-bar', BannerBar)
