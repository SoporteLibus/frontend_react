import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import FormSection from '../../lib/FormSection'

function Input() {
    return (
        <div className="form-group">
            <label><Skeleton baseColor={"var(--color-gris)"} width={"50%"} /></label>
            <div>
                <div><Skeleton baseColor={"var(--color-gris)"} /></div>
            </div>
        </div>
    )
}

export const skeletonGenerators = () => {
        return (
            <div className="main-container">
            <h1>Cargando datos:</h1>
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
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    
                </tbody>
            </table>
            </div>
        )
}

export const skeletonGeneratorExtra = () => {
        return (
            <div className="main-container">
            <h1>Cargando datos:</h1>
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
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    
                </tbody>
            </table>
            </div>
        )
}

export const skeletonListPage = () => {
    return (
        <div className="main-container">
            <div className="div-fecha">
                <header>
                    <br/>
                        <div>
                            <Skeleton baseColor={"var(--color-gris)"} />
                        </div>
                    <br/>
                </header>
            </div>

            <br />
            <form>
            <FormSection title="Cargando datos">
                <Input />
                <Input />
                <Input />
                <Input />
                <Input />
                <Input />
                <Input />
                <Input />
            </FormSection>
            <div className="div-enviar">
                <div><Skeleton baseColor={"var(--color-gris)"} width={"50%"} /></div>
            </div>
            </form>
        </div>
    )
}