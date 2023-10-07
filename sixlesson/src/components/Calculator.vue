<template>
    <div>
        <p>
            <input type="number" v-model="num1"/>
            <input type="number" v-model="num2"/>
            <h1> Умножение : {{ result1 }}</h1>
            <h2> Деление : {{ result2 }}</h2>
            <h3> Сложение : {{ result }}</h3>
            <h4> Вычитание : {{ result4 }}</h4>
        </p>
    </div>
</template>
<script>
export default {
    data() {
      return {
num1:"",
num2:""
      }
    },
    computed: {
      result1() {  
         return this.num1 * this.num2      
      },
      result2() {  
         return this.num1 / this.num2      
      },
      result() {  
         return this.num1 + this.num2      
      },
      result4() {  
         return this.num1 - this.num2      
      },
    }

}
</script>
