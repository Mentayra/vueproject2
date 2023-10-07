<template lang="">
    <div v-for="(el, index) in list" class="brdr">
        Это приветствие на разных языках<br/>
        <button @click="sayHay" :id="index">Тык</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [
                { text: "1. Русский : ПРИВЕТ" },
                { text: "2. Француз : Bonjour" },
                { text: "3. Англичанин: Hello" },
                { text: "4. Африканец: Hi" },
            ]
        }
    },
    methods: {
        sayHay(event) {
            console.log(event.target.id);
            alert(this.list[event.target.id].text)
        }
    }
}
</script>
<style>
.brdr {
    flex-direction: row;
    border: 3px solid rgb(9, 95, 95);
}
</style>