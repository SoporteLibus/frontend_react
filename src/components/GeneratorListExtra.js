import '../styles/search.css'
import Post from "./PostDatosExtras"
import { useState, useEffect } from "react"
import { getDatosExtra } from '../api/axios';
import { skeletonGeneratorExtra } from '../config/global/skeleton';

export default function GeneradoresList() {
    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getDatosExtra().then(json => {
            setSearchResults(json)
            setLoading(false)
        })
    }, [])

    const length = searchResults.length - 1
    const from = length - 20
    const results = searchResults && searchResults.slice(from,length).map(post => <Post key={post.id} post={post}/>);
    const content = results ? results : <article><p>No Matching Posts</p></article>

    if (loading) return skeletonGeneratorExtra()

    return (
        <div className="main-container">
            <h1>Datos extra:</h1>
            <table className="table-cls">
                <thead>
                    <tr>
                        <th>rtp</th>
                        <th>rt1</th>
                        <th>rt2</th>
                        <th>rt3</th>
                        <th>rtplh</th>
                        <th>rt1lh</th>
                        <th>rt2lh</th>
                        <th>rt3lh</th>
                    </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
    )
}