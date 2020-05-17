<template>
  <div class="calculator">
      <Display :value="displayValue"></Display >
      <Button label="AC" triple @onCalcButtonClick="clearMemory"></Button>
      <Button label="/" operation @onCalcButtonClick="setOperation"></Button>
      <Button label="7" @onCalcButtonClick="addDigit"></Button>
      <Button label="8" @onCalcButtonClick="addDigit"></Button>
      <Button label="9" @onCalcButtonClick="addDigit"></Button>
      <Button label="*" operation @onCalcButtonClick="setOperation"></Button>
      <Button label="4" @onCalcButtonClick="addDigit"></Button>
      <Button label="5" @onCalcButtonClick="addDigit"></Button>
      <Button label="6" @onCalcButtonClick="addDigit"></Button>
      <Button label="-" operation @onCalcButtonClick="setOperation"></Button>
      <Button label="1" @onCalcButtonClick="addDigit"></Button>
      <Button label="2" @onCalcButtonClick="addDigit"></Button>
      <Button label="3" @onCalcButtonClick="addDigit"></Button>
      <Button label="+" operation @onCalcButtonClick="setOperation"></Button>
      <Button label="0" double @onCalcButtonClick="addDigit"></Button>
      <Button label="." @onCalcButtonClick="addDigit"></Button>
      <Button label="=" operation @onCalcButtonClick="setOperation"></Button>

  </div>
</template>

<script>
import Display from '../components/display'
import Button from '../components/button'
export default {
    data: function(){
        return {
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            values: [0,0],
            current: 0
        }
    },
    components: {Button, Display},
    methods: {
        clearMemory(){
            Object.assign(this.$data, this.$options.data())
        },
          setOperation(operation) {
            if (this.current === 0) {
                this.operation = operation
                this.current = 1
                this.clearDisplay = true
            } else {
                const equals = operation === "="
                const currentOperation = this.operation
                try {
                    this.values[0] = eval(
                        `${this.values[0]} ${currentOperation} ${this.values[1]}`
                    )
                } catch (e) {
                    this.$emit('onError', e)
                }
                this.values[1] = 0
                this.displayValue = this.values[0]
                this.operation = equals ? null : operation
                this.current = equals ? 0 : 1
                this.clearDisplay = !equals
            }
        },
        addDigit(n){
            if(n === "." && this.displayValue.includes(".")){
                return 
            }

            const clearDisplay = this.displayValue === "0" || this.clearDisplay
            const currentValue = clearDisplay ? "" : this.displayValue
            const displayValue = currentValue + n
            this.displayValue = displayValue
            this.clearDisplay = false

            if(n !== "."){
                const i = this.current
                const newValue = parseFloat(displayValue)
                this.values[i] = newValue
            }
        }
    }

}
</script>

<style>
    .calculator{ 
        height: 320px;
        width: 235px;
        border-radius: 5px;
        margin-left: auto;
        margin-right: auto;
        overflow: hidden;
        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-template-rows: 1fr 48px 48px 48px 48px 48px;
    }
</style>