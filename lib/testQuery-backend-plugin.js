"use strict";
/**
 * Generated using theia-plugin-generator
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var theia = require("@theia/plugin");
// Hello World command
var command = {
    id: 'simple-command',
    label: 'Hello World command'
};
function start(context) {
    var _this = this;
    console.log(">>>>>>>>>>>>>", theia.env.getQueryParameters());
    context.subscriptions.push(theia.commands.registerCommand(command, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Hello World command handler was called with arguments: ", args);
    }));
    context.subscriptions.push(theia.commands.registerCommand({
        id: "terminal-created-with-help-args",
        label: "Create terminal with help arguments",
    }, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var terminal = theia.window.createTerminal("Sh Terminal", "sh", ["-l"]);
        terminal.show();
    }));
    context.subscriptions.push(theia.commands.registerCommand({
        id: "terminal-created-with-help-options",
        label: "Create terminal with help options",
    }, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var termOptions = {
            name: "Test terminal",
            shellPath: "/bin/bash",
            shellArgs: ["-l"],
            env: { "HELLO": "Hello Theia.", "GO": null },
        };
        termOptions["attributes"] = { "CHE_MACHINE_NAME": "machine-exec" };
        console.log("options ;) ", termOptions);
        var terminal = theia.window.createTerminal(termOptions);
        terminal.show();
    }));
    context.subscriptions.push(theia.commands.registerCommand({
        id: "send-text-to-the-terminal",
        label: "Send text to the terminal",
    }, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var terminal = createTerminalWithOptions();
        terminal.show();
        terminal.sendText("clear && echo Theia plugin terminal.", true);
    }));
    context.subscriptions.push(theia.commands.registerCommand({
        id: "plugin-hide-terminal-panel",
        label: "Hide terminal panel after 3 sec",
    }, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(_this, void 0, void 0, function () {
            var terminal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        terminal = createTerminalWithOptions();
                        terminal.show();
                        return [4 /*yield*/, sleep(3000)];
                    case 1:
                        _a.sent();
                        terminal.hide();
                        return [2 /*return*/];
                }
            });
        });
    }));
    context.subscriptions.push(theia.commands.registerCommand({
        id: "show-terminal-with-delay",
        label: "Show terminal after 3 sec",
    }, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(_this, void 0, void 0, function () {
            var terminal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        terminal = createTerminalWithOptions();
                        return [4 /*yield*/, sleep(3000)];
                    case 1:
                        _a.sent();
                        terminal.show();
                        return [2 /*return*/];
                }
            });
        });
    }));
    context.subscriptions.push(theia.commands.registerCommand({
        id: "dispose-terminal",
        label: "Dispose terminal after 3 sec",
    }, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(_this, void 0, void 0, function () {
            var terminal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        terminal = createTerminalWithOptions();
                        terminal.show();
                        return [4 /*yield*/, sleep(3000)];
                    case 1:
                        _a.sent();
                        terminal.dispose();
                        return [2 /*return*/];
                }
            });
        });
    }));
    context.subscriptions.push(theia.commands.registerCommand({
        "id": "subscribe-on-did-close-terminal-event",
        "label": "Subscribe to onDidCloseTerminal event",
    }, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(_this, void 0, void 0, function () {
            var terminal, createTermId;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        terminal = createTerminalWithOptions();
                        terminal.show();
                        return [4 /*yield*/, terminal.processId];
                    case 1:
                        createTermId = _a.sent();
                        theia.window.onDidCloseTerminal(function (term) { return __awaiter(_this, void 0, void 0, function () {
                            var termToCloseId;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, term.processId];
                                    case 1:
                                        termToCloseId = _a.sent();
                                        if (termToCloseId === createTermId) {
                                            console.log("Terminal closed, id: ", createTermId);
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); }, createTermId);
                        return [2 /*return*/];
                }
            });
        });
    }));
}
exports.start = start;
function stop() {
}
exports.stop = stop;
function sleep(time) {
    return new Promise(function (resolve) { return setTimeout(resolve, time); });
}
exports.sleep = sleep;
function createTerminalWithOptions() {
    var termOptions = {
        name: "Test terminal",
        shellPath: "/bin/bash"
    };
    return theia.window.createTerminal(termOptions);
}
//# sourceMappingURL=testQuery-backend-plugin.js.map