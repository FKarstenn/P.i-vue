<template>
  <header id="header">
        <img src="@/assets/LOGO ORIGINAL.png" alt="Imagem" style="height: 50px;">
        <div>Fut Analises</div>
        <div id="entrar-login">
            <a>Entrar</a>
        </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
    padding: 0px;
    margin: 0px;
    list-style: none;
}

a {
    color: inherit;
    text-decoration: inherit;
}

body {
    list-style-type: none;
    width: 100vw;
    font-size: 18px;
}

#header {
    color: white;
    background-color: black;
    padding-inline: 2vw;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
</style>