import { FcSearch } from 'react-icons/fc'

const SearchBar = ({ posts, setSearchResults }) => {
    return (
        <header>
            <br/>
            <form className="search" onSubmit={e => {
                e.preventDefault();
                if (!e.target.search.value) return setSearchResults(posts);

                const resultsArray = posts.filter(
                    post => post.numero_de_operacion.includes(e.target.search.value)
                        ||
                        post.numero_de_inyectora.includes(e.target.search.value)
                        ||
                        post.codigo_de_producto.includes(e.target.search.value)
                        ||
                        post.numero_de_molde.includes(e.target.search.value)
                        ||
                        post.tiempo_de_ciclo.includes(e.target.search.value)
                        ||
                        post.materia_prima.includes(e.target.search.value));

                setSearchResults(resultsArray);
                console.log(resultsArray);
            }}>
                <input
                    className="search__input"
                    type="text"
                    id="search"
                    name="search"
                />
                <button type="submit" >
                    <FcSearch size={12} />
                </button>
            </form>
            <br/>
        </header>
    )
}
export default SearchBar