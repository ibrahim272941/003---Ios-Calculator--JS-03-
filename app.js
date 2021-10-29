class Calculator{
    constructor(previousOperandText,currentOperandText){
        this.previousDisplay=previousOperandText
        this.currentDisplay = currentOperandText
        this.allClear()
    }
    update(){
        this.currentDisplay.innerText=this.currentOperation
        if(this.operation !==null){
            this.previousDisplay.innerText=`${this.previousOperation}${this.operation}`
        }
        else{
            this.previousDisplay.innerText=''
        }
    }
    allClear(){
        this.currentOperation=''
        this.previousOperation=''
        this.operation=null
        
        


    }
    oneDelete(){
        this.currentOperation=this.currentOperation.slice(0,-1)
    }
    addNumber(number){
        if(number === '.'&& this.currentOperation.includes('.'))return
        if(number === '-'&& this.currentOperation.includes('-'))return
      
        if(this.currentOperation.length > 12) return
      
        this.currentOperation = this.currentOperation+number
        
    }
    
    selectOperation(operation){
        if(this.currentOperation ===' ')return
        if(this.previousOperation !== ''){
            this.calculation()
        }
        this.operation=operation
        this.previousOperation=this.currentOperation
        this.currentOperation=''
    }
    calculation(){
        let compute;
        const prev=parseFloat(this.previousOperation) 
        const current = parseFloat(this.currentOperation)

        switch(this.operation){
            case '+':
                compute=prev + current
                break
            case '-':
                compute=prev - current
                break
            case '÷':
                compute=prev / current
                break
            case 'x':
                compute=prev * current
                break
            default:
                return
        }
        this.currentOperation=compute
        this.previousOperation=''
        this.operation=null
    }
    
}

const numberBtn = document.querySelectorAll('[number]');
const operationBtn = document.querySelectorAll('[operation]');
const equalsBtn =document.querySelector('[equals]') 
const delBtn = document.querySelector('[delete]');
const allClearBtn = document.querySelector('[all-clear]');
const previousOperandText = document.querySelector('.previous-operand');
const currentOperandText = document.querySelector('.current-operand');
const minusBtn = document.querySelector('[minus]')
const calculator = new Calculator(previousOperandText,currentOperandText)

numberBtn.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.addNumber(button.innerText)
        calculator.update()
    })
})
allClearBtn.addEventListener('click',()=>{
    calculator.allClear()
    calculator.update()
})
operationBtn.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.selectOperation(button.innerText)
        calculator.update()
    })
})
equalsBtn.addEventListener('click',()=>{
    calculator.calculation()
    calculator.update()
})
delBtn.addEventListener('click',()=>{
    calculator.oneDelete()
    calculator.update()
})



















































// allClear.addEventListener('click',function(){
// previousOperand.textContent=''
// currentOperand.textContent=''
// })

// numberBtn.forEach(button =>{
//     button.addEventListener('click',function(){
//         currentOperand.append(button.innerText)
//     })
// });
// console.log(previousOperand.textContent)
// operation.forEach(operand =>{
//     operand.addEventListener('click',function(){
        
//         previousOperand.append(currentOperand.innerText,operand.innerText)
//         currentOperand.textContent=''
        
//         switch(operand){
//             case '+':
//         }
       
//     })
// })
// function equals(summary){

//     equalsBtn.addEventListener('click',function(){
//         currentOperand.textContent=summary
//         previousOperand.textContent=''
//     })
// }