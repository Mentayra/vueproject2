<template>
    <div>
        <h1>Ваша карточка:</h1>
        <img class="imguser" src="https://avatars.mds.yandex.net/get-dialogs/758954/1d1c9784f593a70db7a8/orig" />
        <h3 @click="Login = !Login">Пароль: {{ Login ? "548915" : "******" }}</h3>
        <h3>Имя: Дмитрий</h3>
        <h3>Фамилия: Калинин</h3>
        <h3>Вы пользователь</h3>
        <h3>Дата рождения: 12.12.2012</h3>
    </div>
</template>
<script>
export default {
    data() {
        return {
            Login: false
        }
    },
}
</script>
<style>
.imguser {
    width: 200px;
    height: 240px;
    border: 2px solid rgb(37, 36, 36);

}
</style>