export class Usuario {

    constructor(
        public id: number = 0,
        public nome: string = '',
        public email: string = '',
        public dataNascimento: string = '',
        public senha: string = '',
        public cpf: string = '',
        public cns: string = '',
        public telefone: string = '',
        public dataCadastro: string = '',
        public dataConfirmacaoEmail: string = '',
        public chaveConfirmacao: string = '',
        public nomeOperadora: string = '',
        public simSerialNumber: string = '',
        public deviceId: string = '',
        public versaoApp: string = '',
        public dataVersaoApp: string = '',
        public matricula: string = '',
        public utilizaApp: number = 0,
        public logradouro: string = '',
        public numero: string = '',
        public bairro: string = '',
        public complemento: string = '',
        public cidade: string = '',
        public uf: string = '',
        public cep: string = '',
        public token: string = ''
    ) { }
}