<template>
  <router-view></router-view>
  <br />
  <li><router-link :to="{ name: 'translate' }">Привет на разных языках</router-link></li>
  <br />
  <li><router-link :to="{ name: 'home' }">Домой</router-link></li>
  <br />
  <li><router-link :to="{ name: 'calendar' }">Календарь на октябрь</router-link></li>
  <br />
  <li><router-link :to="{ name: 'calculator' }">Калькулятор</router-link></li>
</template>
<script>
export default {
}
</script>
