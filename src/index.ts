import { Module } from 'magnet-core/module'
import * as redirectHttps from 'redirect-https'

export default class MagnetRedirectHttps extends Module {
  init () {
    this.moduleName = 'redirect_https'
    this.defaultConfig = __dirname
  }

  async setup () {
    this.app.config.http.wrappers.push(redirectHttps.bind(null, this.config))
  }
}
