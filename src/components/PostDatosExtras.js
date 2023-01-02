const PostDatosExtras = ({ post }) => {
    return (
        <tr>
            <td data-label="#">{post.rtp}</td>
            <td data-label="#">{post.rt1}</td>
            <td data-label="#">{post.rt2}</td>
            <td data-label="#">{post.rt3}</td>
            <td data-label="#">{post.rtplh}</td>
            <td data-label="#">{post.rt1lh}</td>
            <td data-label="#">{post.rt2lh}</td>
            <td data-label="#">{post.rt3lh}</td>
        </tr>
    )
}
export default PostDatosExtras