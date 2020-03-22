class UserCard extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `<h1>Hello</h1>`
    }
}

window.customElements.define('user-card', UserCard)