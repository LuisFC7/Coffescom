import React from "react";
import "./Registro.css";
import bannerImg from "../../images/banner2.png";
import logo from "../../images/logo3.png";

const Registro = () => {
  return (
    <div class="container">
        <img src={logo} />
	<div class="screen">
        
		<div class="screen__content">
            
			<form class="login">
				<div class="login__field">
					
					<input type="text" class="login__input" placeholder="Correo"/>
				</div>
				<div class="login__field">
					<input type="password" class="login__input" placeholder="Contraseña"/>
				</div>
                <div class="login__field">
					<input type="password" class="login__input" placeholder="Contraseña"/>
				</div>
                <div class="login__field">
					<input type="password" class="login__input" placeholder="Contraseña"/>
				</div>
                
				<button class="button login__submit">
					<span class="button__text">INICIAR</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>
			</form>
			
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>
	</div>
</div>
  );
};

export default Registro;
