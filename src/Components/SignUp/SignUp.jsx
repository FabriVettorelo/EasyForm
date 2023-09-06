import { useState } from "react";
import validate from "./validation";
import { useNavigate } from "react-router-dom";
import style from "./SignUp.module.css"
import { NavLink } from "react-router-dom";
import { postUser } from "../../redux/Actions/postUser";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Swal from 'sweetalert2';

const SignUp = ({ toggleForm, toggleAnimation }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const access = localStorage.getItem("access");

    useEffect(() => {
        access === "true" && navigate("/home");
    }, [access]);

    const [userData, setUserData] = useState({
        email: '',
        password: '',
        name: ''
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validate({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const [errors, setErrors] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const errorSave = validate(userData); 
        if (Object.keys(errorSave).length === 0) {
            dispatch(postUser(userData))
                .then((response) => {
                    Swal.fire({
                        icon: "success",
                        title: "Cuenta creada exitosamente",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    setUserData({
                        email: "",
                        password: "",
                        name: "",
                    });

                    navigate("/");
                })
                .catch((error) => {
                    if (error.response) {
                        Swal.fire({
                            icon: "error",
                            title: "Error",
                            text: error.response.data.error,
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true
                        });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Error",
                            text: error.message,
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true
                        });
                    }
                });
        } else {
            Swal.fire({
                icon: "error",
                title: "Error de validación",
                text: "Por favor, complete correctamente todos los campos.",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
            });
        }
    }

    return (
        
            
            <div className={`${style.col} form-container ${toggleAnimation ? "slide-in" : "slide-out"}`}>
                <form className={style.form} onSubmit={handleSubmit}>
                    <h2>Crear Cuenta</h2>

                    <div className={style.text}>
                        <div className={style.content}>
                            <input onChange={handleChange} value={userData.name} name='name' type='text' placeholder="Nombre"></input>
                            {!errors.name && <span className={style.noerror}>p</span>}
                            {errors.name && <span className={style.error}>{errors.name}</span>}
                        </div>

                        <div className={style.content}>
                            <input onChange={handleChange} value={userData.email} name='email' type='email' placeholder="Correo electrónico"></input>
                            {!errors.email && <span className={style.noerror}>p</span>}
                            {errors.email && <span className={style.error}>{errors.email}</span>}
                        </div>

                        <div className={style.content}>
                            <input onChange={handleChange} value={userData.password} name='password' type='password' placeholder="Contraseña"></input>
                            {!errors.password && <span className={style.noerror}>p</span>}
                            {errors.password && <span className={style.error}>{errors.password}</span>}
                        </div>
                    </div>

                    <div>
                        <button className={style.btn} disabled={userData.email === '' || userData.password === ''}>Crear</button>
                    </div>

                    <div>
                        <NavLink className={style.account} onClick={toggleForm}>
                            <p className={style.p2Login}>¿Ya tienes cuenta? Ingresar</p>
                        </NavLink>
                    </div>
                </form>
            </div>
        
    )
}

export default SignUp;