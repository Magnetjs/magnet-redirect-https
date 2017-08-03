"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("magnet-core/module");
const redirectHttps = require("redirect-https");
class MagnetRedirectHttps extends module_1.Module {
    init() {
        this.moduleName = 'redirect_https';
        this.defaultConfig = __dirname;
    }
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.config.http.wrappers.push(redirectHttps.bind(null, this.config));
        });
    }
}
exports.default = MagnetRedirectHttps;
//# sourceMappingURL=index.js.map