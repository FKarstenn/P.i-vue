<template>
  <div class="container">
    <div id="login-container">
        <h1>login</h1>
        <form id="login-form" action="">
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" placeholder="digite seu e-mail" autocomplete="off">
            <label for="password">senha</label>
            <input type="password" name="password" id="password" placeholder="digite a sua senha">
            <div id="submit">
                <a href="home.html">login</a>
            </div>

   
        </form>
        <div id="social-container">
            <p>ou entre pelas suas redes sociais</p>
            <i class="fa fa-facebook-f"></i>
            <i class="fa fa-google"></i>
        </div>
        <div id="register-container">
            <p>ainda não tem uma conta?</p>
            <a href="register.html">Registrar</a>
        </div>
    </div>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: helvetica;
    border: none;
}

.container{
    background-image: url('@/assets/background.jpg');
    background-size: cover;
}

textarea:focus,
imput:focus {
    outline: none;
}

a,
label {
    font-size: .8rem;
}

a {
color: inherit;
text-decoration: inherit;
}


#login-container {
    background-color: white;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 30px;
    margin-top: 10vh;
    border-radius: 10px;
    text-align: center;
}


form {
    margin-top: 30px;
    margin-bottom: 40px;
}

label,
input {
    display: block;
    width: 100%;
    text-align: left;
}

label {
    font-weight: bold;

}

input {
    border-bottom: 2px solid black;
    padding: 10px;
    font-size: .8rem;
    margin-bottom: 20px;
}


#forgot-pass {
    text-align: right;
    display: block;
}

#submit {   
    padding-top: 10px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    height: 40px;
    border-radius: 20px;
    margin-top: 40px;
    color: white;
    background-color: blue;
    cursor: pointer;
}

#submit:hover {
    background-color: black;
    transition: .5s;
}


input[type="submit"] {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    height: 40px;
    border-radius: 20px;
    margin-top: 30px;
    color: white;
    background-color: blue;
    cursor: pointer;
}

input[type="submit"]:hover {
    background-color: black;
    transition: .5s;
}

#social-container,
social-container p {
    margin-bottom: 20px;
}

#social-container i {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    line-height: 40px;
    color: white;
    margin: 5px;
    cursor: pointer;
}

.fa-facebook-f {
    background-color: blue;
}

.fa-google {
    background-color: red;
}

#register-container p {
    margin-bottom: 10px;
}
</style>