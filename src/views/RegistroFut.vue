<template>
  <div id="main-container">
    <h1>Cadastre-se para acessar o sistema</h1>
    <form id="register-form" action="">
      <div class="full-box">
        <label for="email">E-mail</label>
        <input type="email" name="email" id="email" placeholder="Digite seu e-mail" data-min-length="2"
          data-email-validate>
      </div>
      <div class="half-box spacing">
        <label for="name">Nome</label>
        <input type="text" name="name" id="name" placeholder="Digite seu nome" data-required data-min-length="3"
          data-max-length="16">
      </div>
      <div class="half-box">
        <label for="lastname">Sobrenome</label>
        <input type="text" name="lastname" id="lastname" placeholder="Digite seu sobrenome" data-required
          data-only-letters>
      </div>
      <div class="half-box spacing">
        <label for="lastname">Senha</label>
        <input type="password" name="password" id="password" placeholder="Digite sua senha" data-password-validate
          data-required>
      </div>
      <div class="half-box">
        <label for="passconfirmation">Confirmação de senha</label>
        <input type="password" name="passconfirmation" id="passwordconfirmation"
          placeholder="Digite novamente sua senha" data-equal="password">
      </div>

      <div id="submit" class="full-box">
       <a href="./home.html">Registrar</a>
      </div>

      <div id="login-container">
        
        <a href="index.html">voltar para a tela de login?</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
  color: #323232;
  border: none;
}

input,
label {
  display: block;
  outline: none;
  width: 100%;
}

a {
 color: black;
 color: inherit;
 text-decoration: inherit;
  
}




body {
  padding-top: 5vh;
  background-image: url('@/assets/backgroundregister.jpg');
  background-size: cover;
  background-position-y: -150px;
}


#main-container {
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  background-color: #FFF;
  border-radius: 10px;
  padding: 25px;
}

#main-container h1 {
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.6rem;
}

form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.full-box {
  flex: 1 1 100%;
  position: relative;
}

.half-box {
  flex: 1 1 45%;
  position: relative;
}

.spacing {
  margin-right: 2.5%;
}

label {
  font-weight: bold;
  font-size: .8rem;
}

input {
  border-bottom: 2px solid #323232;
  padding: 10px;
  font-size: .9rem;
  margin-bottom: 40px;
}



#submit {
  padding: 10px;
  text-align: center;
  background-color: blue;
  color: #FFF;
  border: none;
  border-radius: 20px;
  height: 40px;
  cursor: pointer;
}
#submit:hover {
  background-color: green;
  transition: .5s;}


#agreement {
  margin-right: 5px;
}

#agreement,
#agreement-label {
  display: inline-block;
  width: auto;
}



.error-validation {
  color: #ff1a1a;
  position: absolute;
  top: 57px;
  font-size: 12px;
}

.template {
  display: none;
}
</style>