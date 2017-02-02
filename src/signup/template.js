var yo = require('yo-yo')
module.exports = yo `<div class='container'>
    <div class="row">
      <div class="col s10 push-s1"></div>
      <div class="row"></div>
      <div class="col m5 hide-on-small-only">
        <img class="iphone" src="iphone_PNG5736.png">
      </div>
      <div class="col s12 m7">
          <div class="row">
              <div class="signup-box">
                  <h1 class="flashgram">Flashgram</h1>
                  <form class="signup-form">
                      <h2>Registrate y comparte tus packs</h2>
                      <div class="section">
                          <a href="" class="btn btn-fb hide-on-small-only waves-effect waves-light">Iniciar sesión con Facebook</a>
                          <a href="" class="btn btn-fb hide-on-med-and-up waves-effect waves-light">Iniciar sesión </a>
                      </div>
                      <div class="divider"></div>
                      <div class="section">
                          <input type="text" name="nombre" placeholder="Nombre completo">
                          <input type="email" name="correo" placeholder="Correo electrónico">
                          <input type="password" name="passw" placeholder="Contraseña">
                          <button class="btn btn-signup waves-effect waves-light " type="submit">Regístrate</button>
                      </div>
                      
                  </form>
              </div>  
          </div>  
          <div class="row">
              <div class="login-box">
                  ¿Tienes una cuenta? <a  href="/Login">Entrar</a>
              </div>
          </div>  
      </div>
    </div>     
    </div> `