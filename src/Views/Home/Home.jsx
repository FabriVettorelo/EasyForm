import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getResponses } from '../../redux/Actions/getResponses';
import { getForm } from '../../redux/Actions/getForm';
import { getUserById } from '../../redux/Actions/getUserById';
import styles from './Home.module.css'
import { deleteRes } from '../../redux/Actions/deleteResponse';
import Swal from 'sweetalert2';
import Update from '../Update/Update';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isTabOpen, setIsTabOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const allResponses = useSelector((state) => state.allResponses)
    const userInfo = useSelector((state) => state.user)
    const allForms = useSelector((state) => state.allForms)
    const [orderOption, setOrderOption] = useState('reciente')
    const [searchText, setSearchText] = useState('')
    const reload = () => {
        window.location.reload(false);
    };

    const access = localStorage.getItem("access");
    const myId = localStorage.getItem("clientId");
    const userResponses = allResponses.filter(res => Number(res?.User1Id) === Number(myId))

    useEffect(() => {
        access !== "true" && navigate("/");
    }, [access]);

    useEffect(() => {
        localStorage.setItem("form", null);
        dispatch(getResponses());
        dispatch(getForm());
        dispatch(getUserById(myId))
    }, [dispatch]);

    const toggleTab = () => {
        setIsTabOpen(!isTabOpen);
    };
    const tabClassName = isTabOpen ? styles.filtersopen : styles.filters;

    const handleOrderChange = (event) => {
        setOrderOption(event.target.value);
    };
    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const filterAndSortUserResponses = () => {
        let filteredResponses = userResponses;

        if (searchText.trim() !== '') {
            filteredResponses = userResponses?.filter((res) => res?.FormId==
              ( (allForms?.find(form=>form?.title?.toLowerCase().includes(searchText?.toLowerCase()))?.id)) 
            );
        }

        if (orderOption === 'reciente') {
            return filteredResponses.slice().sort((a, b) => b.id - a.id);
        } else if (orderOption === 'antiguo') {
            return filteredResponses.slice().sort((a, b) => a.id - b.id);
        } else {
            return filteredResponses;
        }
    };

    return (
        <div className={styles.home}>
            <div className={styles.info}>
                <div className={tabClassName}>
                    {isTabOpen ? <div className={styles.block}>
                        <button className={styles.tab} onClick={toggleTab}>Búsqueda y Filtrado ▲</button>
                    </div>
                        :
                        <div>
                            <button className={styles.tab} onClick={toggleTab}>Búsqueda y Filtrado ▼</button>
                        </div>
                    }

                    {isTabOpen && (
                        <div className={styles.tabContent} style={{ animation: isTabOpen ? 'myAnim 1s ease 0s 1 normal forwards' : 'none' }}>
                            <div style={{ marginTop: "1vh", marginBottom: "1vh" }}>
                                Ordenamiento <select value={orderOption} onChange={handleOrderChange}>
                                    <option value="reciente">Recientes-Antiguos</option>
                                    <option value="antiguo">Antiguos-Recientes</option>
                                </select>
                            </div>
                            <div>  Búsqueda
                <input
                    type="text"
                    placeholder='Busqueda por Nombre'
                    value={searchText}
                    onChange={handleSearchChange}
                /></div>
                        </div>
                    )}
                </div>
                <div className={styles.header}>
                    <p>Mis Formularios ({userResponses?.length})</p>
                </div>
                <div className={styles.list}>
                    {(userResponses?.length > 0) ? filterAndSortUserResponses().map((res) => {
                        const form = allForms.find(e => e.id === res.FormId)
                        const handleSubmit = (event) => {
                            event.preventDefault();
                            setSelected(res?.id)

                        };
                        const handleDelete = (event) => {
                            event.preventDefault();
                            Swal.fire({
                                icon: 'question',
                                background: '#dfdbdb',
                                title: 'Eliminar',
                                text: "¿Esta seguro de borrar?",
                                showConfirmButton: true,
                                confirmButtonColor: "rgb(196, 34, 83)",
                                showCancelButton: true,
                                confirmButtonText: 'Eliminar',
                                cancelButtonText: 'Volver',
                                allowOutsideClick: () => !Swal.isLoading(),
                                preConfirm: async () => {
                                    try {
                                        await dispatch(deleteRes(res?.id));
                                        await dispatch(getResponses());
                                        return new Promise((resolve) => {
                                            setTimeout(() => {
                                                resolve();
                                            }, 1000).then(
                                                setTimeout(() => {
                                                    Swal.fire({
                                                        icon: 'success',
                                                        background: '#dfdbdb',
                                                        title: 'Listo!',
                                                        text: 'Eliminado correctamente.',
                                                        showConfirmButton: false,
                                                        timer: 2000,
                                                    })
                                                }, 1000))
                                        });
                                    } catch (error) {
                                        console.error(error);
                                        return Promise.reject();
                                    }
                                },
                            });
                            if (result.isConfirmed) {
                                Swal.close();
                            } else {
                                navigate("/home");
                            }
                        };
                        return (<div className={styles.res}>
                            <p style={{ cursor: "pointer" }} onClick={(event) => handleSubmit(event)}>📝 {form?.title}</p>
                            <button className={styles.delete} type='submit' onClick={(event) => handleDelete(event)}>X</button>
                        </div>)
                    }
                    ) : "No hay formularios por el momento"}
                </div>

            </div>
            <div className={styles.formview}>
                {selected === null ? <h3 style={{ color: "white" }}>Selecciona o busca un formulario</h3> : <Update selected={selected} />}
            </div>
        </div>
    )

}
export default Home;
