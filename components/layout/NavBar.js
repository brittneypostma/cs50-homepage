class NavBar extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
<style>
  .nav {
    width: 100%;
    height: 57px;
    position: fixed;
    display: grid;
    grid-template-colomns: 1fr 1fr 1fr;
    width: 100%;
    z-index: 10;
    align-items: center;
    background: linear-gradient(#000, #333, #000) 0 50%;
  }


  .logo {
    width: 55px;
    position: relative;
    top: 1px;
  }

  #topTitle {
    justify-self: center;
    position: relative;
    top: -60px;
  }

  #topTitle::before {
    background: transparent;
  }

  #topTitle:hover::before {
      background: transparent;
  }

</style>

<nav>
  <div class="nav">
    <div class="nav-title">
      <img src="./images/logo.png" alt="logo" class="logo" />
    </div>
    <p id="topTitle">b.Designed</p>
  </div>
</nav>
`
    }
}

window.customElements.define('app-navbar', NavBar)

