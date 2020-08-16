"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, response) {
    var user = CreateUser_1.default({
        name: 'Guilherme',
        email: 'guilherme@gmail.com',
        password: '123456',
        techs: [{ title: 'NodeJS', experience: 100 }, { title: 'React Native', experience: 50 }]
    });
    return response.json(user);
}
exports.default = helloWorld;
