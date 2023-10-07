<template>
    <div>
        <table>
  <thead>
  <tr>
    <th class="monday">Понедельник :(</th>
    <th class="monday">Вторник :(</th>
    <th class="monday">Среда :(</th>
    <th class="monday">Четверг :(</th>
    <th class="monday">Пятница :(</th>
    <th class="sunday">Суббота :)</th>
    <th  class="sunday">Воскресенье :)</th>
  </tr>
</thead>
<tbody>
    <tr>
        <td class="monday"></td>
        <td class="monday"></td>
        <td class="monday"></td>
        <td class="monday"></td>
        <td class="monday"></td>
        <td class="sunday"></td>
        <td class="sunday">1</td>
    </tr>
  <tr>
    <td class="monday">2</td>
    <td class="monday">3</td>
    <td class="monday">4</td>
    <td class="monday">5</td>
    <td class="monday">6</td>
    <td class="sunday">7</td>
    <td class="sunday">8</td>
  </tr>
  <tr>
    <td class="monday">9</td>
    <td class="monday">10</td>
    <td class="monday">11</td>
    <td class="monday">12</td>
    <td class="monday">13</td>
    <td class="sunday">14</td>
    <td class="sunday">15</td>

  </tr>
  <tr>
    <td class="monday">16</td>
    <td class="monday">17</td>
    <td class="monday">18</td>
    <td class="monday">19</td>
    <td class="monday">21</td>
    <td class="sunday">22</td>
    <td class="sunday">23</td>
  </tr>
  <tr>
    <td class="monday">24</td>
    <td class="monday">25</td>
    <td class="monday">26</td>
    <td class="monday">27</td>
    <td class="monday">28</td>
    <td class="sunday">29</td>
    <td class="sunday">30</td>
  </tr>
  <tr>
    <td class="monday">31</td>
  </tr>
</tbody>
</table>
    </div>

    <div>
      <button :class="{active:Show, disable:!Show}" @click="Show = !Show">
        Антистресс
      </button>
      </div>
</template>

<script>
export default{
  data() {
    return {
      Show:false
    }
  },
}
</script>

<style>

.active{
  background-color: red;
}

.disable{
  background-color: gold;
}



td,
th{
    border: 3px solid rgb(146, 141, 141);
}
table {
  border: 3px solid rgb(146, 141, 141);
}
.monday{
background-color: brown;
}
.sunday{
    background-color: gold;
}
</style>