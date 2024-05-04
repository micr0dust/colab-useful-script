function ConnectButton () {
    document
      .querySelector('#top-toolbar > colab-connect-button')
      .shadowRoot.querySelector('#connect')
      .click()
}
setInterval(ConnectButton, 60000)
