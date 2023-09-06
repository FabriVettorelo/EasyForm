const validate = (userData) => {
    const errors={}; 
 
    if (!userData.name || !/^(?!^\s*$)[A-Za-z0-9\s]{3,25}$/.test(userData.name) || userData.name.length < 3 || userData.name.length >= 25) {
     errors.name = 'El nombre debe contener de 3 a 25 caracteres, solo letras y números';
   }
 
     if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
         errors.email='el email ingresado no es valido'
     }
     if(!userData.email){
         errors.email='debe ingresar un email'
     }
     if(userData.email.length>35){
         errors.email='el email no debe superar los 35 caracteres'
     }
 
     if(!/.\d+./.test(userData.password)){
         errors.password='la password debe tener al menos un numero'
         
     }
     if(userData.password.length<6 || userData.password.length>10){
         errors.password= 'la password debe una longitud de entre 6 y 10 caracteres'
     }
 
     return errors;
 }
 
 export default validate;