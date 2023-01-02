import '../styles/search.css'
import Post from "./PostGenerator"
import { useState, useEffect } from "react"
import { getGenerator1 } from '../api/axios';
import { skeletonGenerators } from '../config/global/skeleton';

export default function GeneradoresList() {
    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getGenerator1().then(json => {
            setSearchResults(json)
            setLoading(false)
        })
    }, [])

    const length = searchResults.length - 1
    const from = length - 20
    const results = searchResults && searchResults.slice(from,length).map(post => <Post key={post.id} post={post}/>);
    const content = results ? results : <article><p>No Matching Posts</p></article>

    if (loading) return skeletonGenerators()

    return (
        <div className="main-container">
            <h1>Genarador N°1:</h1>
            <table className="table-cls">
                <thead>
                    <tr>
                        <th>Battery Voltage</th>
                        <th>Engine Oil Pressure</th>
                        <th>Engine Coolant Temperature</th>
                        <th>Engine Run Time</th>
                        <th>Engine kW/Hours</th>
                        <th>Engine RPM</th>
                        <th>Phase A/B Volts</th>
                        <th>Phase B/C Volts</th>
                        <th>Phase C/A Volts</th>
                        <th>Total kW</th>
                        <th>Total kVA</th>
                        <th>Genarator Power Factor</th>
                        <th>Phase A kVAr</th>
                        <th>Phase B kVAr</th>
                        <th>Phase C kVAr</th>
                        <th>Total kVAr</th>
                        <th>Bus Output Frequency</th>
                        <th>Generator Output Frequency</th>
                        <th>Network Address</th>
                        <th>SYNC TIMEOUT Action</th>
                        <th>Phase A/Neutral Volts</th>
                        <th>Phase B/Neutral Volts</th>
                        <th>Phase C/Neutral Volts</th>
                        <th>Mains/Bus Phase A/Neutral Volts</th>
                        <th>Phase A Current</th>
                        <th>Phase B Current</th>
                        <th>Phase C Current</th>
                        <th>Phase A kVA</th>
                        <th>Phase B kVA</th>
                        <th>Phase C kVA</th>
                        <th>Voltage Bias Analog Output</th>
                        <th>Speed Bias Analog Output</th>
                        <th>Load Control Mode</th>
                        <th>Synchronizer Mode</th>
                        <th>Number Of Unacknowledged Alarms</th>
                        <th>Unit Network Priority</th>
                        <th>Current Master Unit</th>
                        <th>Engine Status</th>
                        <th>Synchroscope</th>
                        <th>Charge Priority</th>
                    </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
    )
}