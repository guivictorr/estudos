"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Caracteristicas = /** @class */ (function () {
    function Caracteristicas(corDoCabelo, corDosOlhos, sexo) {
        this.corDoCabelo = corDoCabelo;
        this.corDosOlhos = corDosOlhos;
        this.sexo = sexo;
    }
    return Caracteristicas;
}());
var Pessoa = /** @class */ (function (_super) {
    __extends(Pessoa, _super);
    function Pessoa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pessoa.prototype.setCpf = function (cpf, nome) {
        this.cpf = cpf;
        this.nome = nome;
    };
    Pessoa.prototype.getCpf = function (cpf, nome) {
        if (this.cpf === cpf && this.nome === nome) {
            console.log("CPF: " + this.cpf + " / NOME: " + this.nome);
        }
        else {
            throw 'Você não é você';
        }
    };
    return Pessoa;
}(Caracteristicas));
var pessoa = new Pessoa('Azul', 'Marrom', 'Masculino');
pessoa.setCpf('000.000.000-00', 'Guilherme Victor');
try {
    pessoa.getCpf('111.111.111-11', 'Outra pessoa');
}
catch (err) {
    console.error(err);
}
