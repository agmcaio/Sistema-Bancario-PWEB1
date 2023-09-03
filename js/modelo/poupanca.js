class Poupanca extends Conta{
    constructor(numero, saldo, dataAniversario){
        super(numero, saldo);
        this._dataAniversario = dataAniversario;
    }

    get dataAniversario(){
        return this._dataAniversario;
    }

    set dataAniversario(novaData){
        this._dataAniversario = novaData;
    }
}