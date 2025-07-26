import geraSenha from './gerador';

const resultado = document.querySelector('.resultado');
const qtdCaracteres = document.querySelector('.qtd-caracter');
const checkMaiusculas = document.querySelector('.check-maiusculas');
const checkMinusculas = document.querySelector('.check-minusculas');
const checkNumeros = document.querySelector('.check-numeros');
const checkSimbolos = document.querySelector('.check-simbolos');
const btGera = document.querySelector('.gerar-senha');

export default () => {
    btGera.addEventListener('click', () => {
        resultado.innerHTML = gera();
        resultado.classList.add('senha-gerada');
        
        if (qtdCaracteres.value <= 0) {
            resultado.innerHTML = 'Escolha o tamanho da sua senha';
        }
    })

    document.addEventListener('keydown', (e) => {
        if(e.key === 'Enter'){
            btGera.click();
        }
    })
}

function gera() {

    const senha = geraSenha(qtdCaracteres.value, checkMaiusculas.checked, checkMinusculas.checked, checkNumeros.checked, checkSimbolos.checked);
    return senha || 'Nada selecionado';
}