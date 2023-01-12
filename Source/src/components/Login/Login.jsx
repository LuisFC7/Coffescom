import React from "react";
import "./Login.css";
import bannerImg from "../../images/banner2.png";
import logo from "../../images/logo3.png";
import { useHistory } from "react-router-dom";

const Login = () => {
    // function HandleClick(e){
	// 	e.preventDefault();
	// 	const history=useHistory();
	// 	history.push('/Administradort');

	// 	// console.log('You clicked submit.');
	// 	let correo=document.getElementById("correo").value
	// 	let pass=document.getElementById("pass").value
	// 	let correo1="admin1@gmail.com"
	// 	let correo2="usuario1@gmail.com"
	// 	let correo3="sadmin1@gmail.com"

	// 	if(correo1==correo){
	// 		history.push('/Administradort');
	// 	}else if(correo2==correo){
	// 		history.push("/Home");
	// 	}else if(correo3==correo){
	// 		history.push("/Home");
	// 	}else{
	// 		alert("Usuario o contraseña erroneos:(")
	// 	}
	// }
	var a
	function HandleSubmit() {
		// e.preventDefault();
		// console.log('You clicked submit.');
		let correo=document.getElementById("correo").value
		let pass=document.getElementById("pass").value
		let correo1="admin1@gmail.com"
		let correo2="usuario1@gmail.com"
		let correo3="sadmin1@gmail.com"
		let dir=""
		if(correo1==correo){
			dir="/Administradort"
			console.log(dir)
		}else if(correo2==correo){
			dir="/Home"
			console.log(dir)
		}else if(correo3==correo){
			dir="/Home"
			console.log(dir)
		}else{
			alert("El usuario no se encuentra registrado:(")
		}		
		return dir
	}


	 const history=useHistory();
	// // const dire=HandleSubmit();
	// // console.log(dire)
	// let dire=obt()
	// console.log(dire)
     const handleClick=()=>history.push("\""+HandleSubmit+"\"");
	// // onClick={()=>handleClick()}


  return (
    <div class="container">
        <img src={logo} />
	<div class="screen">
        
		<div class="screen__content">
            
			<form class="login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="Correo" id="correo"/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Contraseña" id="pass" onChange={HandleSubmit}/>
				</div>
				
				<button class="button login__submit" onClick={handleClick}>
					
					<span class="button__text">INICIAR</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>
			</form>
			<div class="social-login">
				<a href="/registro" class="regis">No tienes cuenta? <br></br>Registrate</a>
				<div class="social-icons">
                <a href="https://www.facebook.com/escomipnmx" class="social-login__icon fab fa-facebook"></a> <br></br>
				</div>
                <div class="social-icons">
				<a href="https://twitter.com/escomunidad" class="social-login__icon fab fa-twitter"></a>
					
				</div>
			</div>
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

export default Login;
