import '../styles/search.css'
import { FcSearch } from 'react-icons/fc';

export default function Search(){
    return (
        <div className="main-container">
            <div className="div-fecha">
                <input type="date" /><button type="button" className="ocultar-btn"><FcSearch /></button>
            </div>
            <table className="table-cls">
                <thead>
                    <tr>
                        <th>Nombre de archivo</th>
                        <th>Fecha</th>
                        <th>N° OP</th>
                        <th>Cod. producto</th>
                        <th>Material 1/Lote</th>
                        <th>Material 2/Lote</th>
                        <th>Colorante/Lote</th>
                        <th>Aditivo</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td data-label="Nombre de archivo">1920-150T-904645</td>
                    <td data-label="Fecha">14/08/2022</td>
                    <td data-label="N° OP">78888</td>
                    <td data-label="Cod. producto">904645</td>
                    <td data-label="Material 1/Lote">16</td>
                    <td data-label="Material 2/Lote">20</td>
                    <td data-label="Colorante/Lote">34</td>
                    <td data-label="Aditivo">NV SAN Deslizante/Anti-Scratch 17106</td>
                </tr>
                <tr>
                    <td data-label="Nombre de archivo">1920-150T-904723</td>
                    <td data-label="Fecha">15/08/2022</td>
                    <td data-label="N° OP">78889</td>
                    <td data-label="Cod. producto">904723</td>
                    <td data-label="Material 1/Lote">17</td>
                    <td data-label="Material 2/Lote">21</td>
                    <td data-label="Colorante/Lote">67</td>
                    <td data-label="Aditivo">NV SAN Deslizante/Anti-Scratch 17107</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}