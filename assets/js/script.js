function criaCalc() {

  return {
    display: document.querySelector(".display"),
    clear: document.querySelector(".btn-clear"),

    clearDisplay(){
      this.display.value = '';
    },

    btnParaDisplay(valor){
      this.display.value += valor;
    },

    deleteOne(){
      this.display.value = this.display.value.slice(0, -1); 
    },
    
    fazerConta(){
      let conta = this.display.value;

      try{
        conta = eval(conta);
        if(!conta){
          alert('Conta invalida');
          return;
        }

        this.display.value = conta;
      } catch(e){
        alert('Conta invalida');
      }
    },

    inicia() {
      this.clickBotoes();
    },

    clickBotoes() {
      document.addEventListener('click', e => {
        const element = e.target;

        if (element.classList.contains('btn-num')) {
          this.btnParaDisplay(element.innerText);
        }
        if (element.classList.contains('btn-clear')) {
          this.clearDisplay();
        }
        if (element.classList.contains('btn-del')) {
          this.deleteOne();
        }
        if (element.classList.contains('btn-eq')) {
          this.fazerConta();
        }

      })
    }
  };
}

const calculadora = criaCalc();
calculadora.inicia();
