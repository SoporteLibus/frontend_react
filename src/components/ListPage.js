import Post from "./Post"
import { useState, useEffect } from "react"
import getPosts from '../api/axios';
import '../styles/search.css'
import SearchBar from '../components/SearchBar'
import styled from "styled-components";
import Form from '../lib/Form'
import Input from '../lib/Input';
import Input5 from '../lib/Input5';

export const MobileForm = styled.div`
    justify-content: center;
    align-items: center;
    display: grid;
`;

const ListPage = () => {
    const [posts, setPosts] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPosts().then(json => {
            setPosts(json)
            setSearchResults(json)
            setLoading(false)
        })
    }, [])

    const results = searchResults && searchResults.map(post => <Post key={post._id} post={post}/>);

   const cargarElementos = async ()=>{

   try{
    let Myelement1 = await document.forms['formulario']['numero_de_operacion']
    Myelement1.setAttribute('value', searchResults[0].numero_de_operacion);

    let Myelement2 = await document.forms['formulario']['codigo_de_producto']
    Myelement2.setAttribute('value', searchResults[0].codigo_de_producto);

    let Myelement3 = await document.forms['formulario']['numero_de_inyectora']
    Myelement3.setAttribute('value', searchResults[0].numero_de_inyectora);

    let Myelement4 = await document.forms['formulario']['numero_de_molde']
    Myelement4.setAttribute('value', searchResults[0].numero_de_molde);

    let Myelement5 = await document.forms['formulario']['tiempo_de_ciclo']
    Myelement5.setAttribute('value', searchResults[0].tiempo_de_ciclo);

    var Myelement6 = await document.forms['formulario'][`materia_prima`]
    Myelement6.setAttribute('value', searchResults[0].materia_prima)
   }catch(e){}
    
        
     }



cargarElementos()

if (loading) return <h1>LOADING...</h1>
    return (
        <div className="main-container">
            <div className="div-fecha">
                <SearchBar posts={posts} setSearchResults={setSearchResults} />
            </div>

            <br/>
            
            <Form title="Formulario" action="#" name="formulario" 
            classButton="div-enviar" nameButton="Agregar" >
            <MobileForm>
            <div className="div-block">
                <Input title="Numero de operación" id="numero_de_operacion" placeholder="Ingresar" required="required" />
                <Input title="Numero de pproducto" id="codigo_de_producto" placeholder="Ingresar" required="required" />
                <Input title="Numero de inyectora" id="numero_de_inyectora" placeholder="Ingresar" required="required" />
                <Input title="Numero de molde" id="numero_de_molde" placeholder="Ingresar" required="required" />
                <Input title="Tiempo de ciclo" id="tiempo_de_ciclo" placeholder="Ingresar" required="required" />
                <Input5 title="Materia prima" id1="materia_prima" placeholder="Ingresar" />
            </div>
            <div className="div-block">
                <Input title="Aditivo" id="aditivo" placeholder="Ingresar" required="required" />
                <Input title="Registrado por" id="registrado_por" placeholder="Ingresar" required="required" />
                <Input title="Pico de inyectora" id="pico_de_inyectora" placeholder="Ingresar" required="required" />
                <Input title="Microgel 0" id="microgel_0" placeholder="Ingresar" required="required" />
                <Input title="Microgel 1" id="microgel_1" placeholder="Ingresar" required="required" />
                <Input title="Recoplas" id="regoplas" placeholder="Ingresar" required="required" />
                <Input title="Robot" id="robot" placeholder="Ingresar" required="required" />
                <Input title="Otro" id="otro" placeholder="Ingresar" required="required" />
                <Input title="Temp. plato fijo" id="temp_plato_fijo" placeholder="Ingresar" required="required" />
                <Input title="Temp. plato movil" id="temp_plato_movil" placeholder="Ingresar" required="required" />
                <Input title="Temp. masa fundida" id="temp_masa_fundida" placeholder="Ingresar" required="required" />
                <Input title="Tablero colada caliente" id="tablero_colada_caliente" placeholder="Ingresar" required="required" />
                <Input title="Temp. de horno" id="temp_horno" placeholder="Ingresar" required="required" />
                <Input title="Tpo. de ciclo optimo" id="tpo_ciclo_optimo" placeholder="Ingresar" required="required" />
                <Input title="Tpo. ciclo actual" id="tpo_ciclo_actual" placeholder="Ingresar" required="required" />
                <Input title="Tpo. de inyección" id="tpo_inyeccion" placeholder="Ingresar" required="required" />
                <Input title="Tpo. de extrusor" id="tpo_extrusor" placeholder="Ingresar" required="required" />
                <Input title="Tpo. de enfriamiento" id="tpo_enfriamiento" placeholder="Ingresar" required="required" />
                <Input title="Cojin" id="cojin" placeholder="Ingresar" required="required" />
                <Input title="Pico de preción" id="pico_presion" placeholder="Ingresar" required="required" />
                <Input title="Punto de transf." id="punto_transferencia" placeholder="Ingresar" required="required" />
                <Input title="Fuerza de cierre" id="fuerza_cierre" placeholder="Ingresar" required="required" />
                <Input title="Tamaño dosificado" id="tamano_dosific" placeholder="Ingresar" required="required" />
                <Input title="Contrapresión" id="contrapresion" placeholder="Ingresar" required="required" />
                <Input title="Precion de empaque" id="presion_empaque" placeholder="Ingresar" required="required" />
                <Input title="Tpo. de retención" id="tpo_retencion" placeholder="Ingresar" required="required" />
                <Input title="Tipo de expulsion" id="tipo_expulsion" placeholder="Ingresar" required="required" />
                <Input title="Cavidades actualmente habilitadas" id="cavidades" placeholder="Ingresar" required="required" />
                <Input title="Observaciones" id="observaciones" placeholder="Ingresar" required="required" />
            </div>
            {/* <Select title="Materia Prima" >
            <option value="op1">Estandar</option>
            <option value="op2">Boq. Cobre</option>
            <option value="op3">Valv. A 2</option>
            <option value="op4">Otro</option>
            <option value="op5">Diametro</option>
            </Select> */}
            </MobileForm>
            </Form>
            </div>
       
    )
}
export default ListPage