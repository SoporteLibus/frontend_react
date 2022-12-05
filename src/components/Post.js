const Post = ({ post }) => {
    console.log(post)
    return (
        <tr>
            <td data-label="Numero de operacion">{post.data.numero_de_operacion}</td>
            <td data-label="Codigo de producto">{post.data.codigo_de_producto}</td>
            <td data-label="Numero de Inyectora">{post.data.numero_de_inyectora}</td>
            <td data-label="Numero de molde">{post.data.numero_de_molde}</td>
            <td data-label="Tiempo de ciclo">{post.data.tiempo_de_ciclo}</td>
            <td data-label="Materia prima">{post.data.materia_prima}</td>
        </tr>
    )
}
export default Post