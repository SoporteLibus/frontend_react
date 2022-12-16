import Post from "./Post"
import { useState, useEffect } from "react"
import getPosts from '../api/axios';
import '../styles/search.css'
import SearchBar from '../components/SearchBar'
import styled from "styled-components";
import Form from '../lib/Form'
import Input from '../lib/Input';

export const MobileForm = styled.div`
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;

const ListPage = () => {
    const [posts, setPosts] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [loading,setLoading]=useState(true)
    let content;

    useEffect(() => {
        getPosts().then(json => {
        setPosts(json)
        setSearchResults(json)
        setLoading(false)
    })
    }, [])

    const results = searchResults && searchResults.map(post => <Post key={post._id} post={post}/>);
    console.log("LISTPAGE>>",searchResults)
    if (searchResults[60] || !searchResults[1]) {
        content = <tr><td><article><p>No Matching Posts</p></article></td></tr>
    } else {
        content = results
    }

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
            <table className="table-cls">
                <thead>
                        <tr>
                            <th>Numero de operacion</th>
                            <th>Codigo del producto</th>
                            <th>Numero de Inyectora</th>
                            <th>Numero de Molde</th>
                            <th>Tiempo de ciclo</th>
                            <th>Materia Prima</th>
                        </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </table>

            <br/>
            
            <Form title="Formulario" action="#" name="formulario" 
            classButton="div-enviar" nameButton="Agregar" >
            <MobileForm>
            <Input title="Numero de Operacion" id="numero_de_operacion" placeholder="Ingresar" required="required" />
            <Input title="Numero de Producto" id="codigo_de_producto" placeholder="Ingresar" required="required" />
            <Input title="Materia Prima" id="materia_prima" placeholder="Ingresar" />
            <Input title="Numero de Inyectorra" id="numero_de_inyectora" placeholder="Ingresar" required="required" />
            <Input title="Numero de Molde" id="numero_de_molde" placeholder="Ingresar" required="required" />
            <Input title="Tiempo de ciclo" id="tiempo_de_ciclo" placeholder="Ingresar" required="required" />
            <Input title="T. de ciclo optimo" id="" placeholder="Ingresar" required="required" />
            <Input title="T. de inyección" id="" placeholder="Ingresar" required="required" />
            <Input title="T. de extrusor" id="" placeholder="Ingresar" required="required" />
            <Input title="T. de enfriamiento" id="" placeholder="Ingresar" required="required" />
            <Input title="Cojin" id="" placeholder="Ingresar" required="required" />
            <Input title="Pico de preción" id="" placeholder="Ingresar" required="required" />
            <Input title="Punto de transferencia" id="" placeholder="Ingresar" required="required" />
            <Input title="Fuerza de cierre" id="" placeholder="Ingresar" required="required" />
            <Input title="Tamaño dosificado" id="" placeholder="Ingresar" required="required" />
            <Input title="Contrapresión" id="" placeholder="Ingresar" required="required" />
            <Input title="Presión de enpaque" id="" placeholder="Ingresar" required="required" />
            <Input title="Tiempo de retención" id="" placeholder="Ingresar" required="required" />
            <Input title="T. de expulsion" id="" placeholder="Ingresar" required="required" />
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