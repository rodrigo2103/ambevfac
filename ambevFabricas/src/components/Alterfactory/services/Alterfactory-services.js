const fabricas = [
    { codigo: 10, nome: 'CERVEJARIA ÁGUAS DA SERRA', ambevCode: '123', endereço: 'Av.Skol', dimensão: '10.000m²', pontuação: 10 },
    { codigo: 20, nome: 'CERVEJARIA PÉ DE SERRA', ambevCode: '456', endereço: 'Av.Brahma', dimensão: '7.500m²', pontuação: 7 },
    { codigo: 30, nome: 'CERVEJARIA GOLIAS', ambevCode: '789', endereço: 'Av.Bohemia', dimensão: '5.000m²', pontuação: 3 },
    { codigo: 40, nome: 'CERVEJARIA RODRIGUES', ambevCode: '789', endereço: 'Av.Bohemia', dimensão: '5.000m²', pontuação: 3 },
    { codigo: 50, nome: 'CERVEJARIA GUIMARAES', ambevCode: '789', endereço: 'Av.Bohemia', dimensão: '5.000m²', pontuação: 3 },
    { codigo: 60, nome: 'CERVEJARIA SILVA', ambevCode: '789', endereço: 'Av.Bohemia', dimensão: '5.000m²', pontuação: 3 },
    { codigo: 70, nome: 'CERVEJARIA DO LUCIO', ambevCode: '789', endereço: 'Av.Bohemia', dimensão: '5.000m²', pontuação: 3 }
];

const getFabricas = () => new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve([...fabricas]);
    }, 2000);
});

const getFabrica = (codigo) => new Promise((resolve, reject) => {
    setTimeout(function () {
        codigo = parseInt(codigo)

        const fabrica = fabricas.find(x => x.codigo === codigo);
        fabrica ? resolve(fabrica) : reject('fabrica não encontrada');

    }, 2000);
});

const getFabricafromlist = (codigo ,fabrica) => new Promise((resolve, reject) => {
    setTimeout(function () {
        codigo = parseInt(codigo)

        const fabrica = fabricas.find(x => x.codigo === codigo);
        fabrica ? resolve(fabrica) : reject('fabrica não encontrada');

    }, 2000);
});

const adicionaFabrica = ({ codigo, nome, ambevCode, endereço, dimensão, pontuação }) => new Promise((resolve, reject) => {
    setTimeout(function () {
        fabricas.push({ codigo, nome, ambevCode, endereço, dimensão, pontuação });
        resolve();
    }, 2000);
});

const atualizaFabrica = (codigo, {nome, ambevCode, endereço, dimensão, pontuação }) => new Promise((resolve, reject) => {
    setTimeout(function () {
        const fabrica = getFabrica(codigo);
        if (!fabrica) return;

        const fabricaIdx = fabricas.findIndex(x => x.codigo === codigo);
        fabricas.splice(fabricaIdx, 1);
        fabricas.push({ codigo, nome, ambevCode, endereço, dimensão, pontuação })
        resolve();
    }, 2000);
});

const removeFabrica = (codigo) => new Promise((resolve, reject) => {
    setTimeout(function () {
        const fabrica = getFabrica(codigo);
        if (!fabrica) {
            reject();
            return;
        }

        const fabricaIdx = fabricas.findIndex(x => x.codigo === codigo);
        fabricas.splice(fabricaIdx, 1);
        resolve();
    }, 2000);
});

export default {
    getFabricas,
    getFabrica,
    getFabricafromlist,
    adicionaFabrica,
    atualizaFabrica,
    removeFabrica,
}