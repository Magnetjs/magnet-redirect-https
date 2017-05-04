import { Module } from 'magnet-core/module'
import * as redirectHttps from 'redirect-https'

export default class MagnetPrimus extends Module {
  get moduleName () { return 'redirect_https' }
  get defaultConfig () { return __dirname }

  async setup () {
    this.app.config.http.wrappers.push(redirectHttps.bind(null, this.config))
  }
}
