import { IoIosArrowBack } from 'react-icons/io'

export default function Back(){
    return (
        <button className="back-btn" onClick={() => window.history.back()}><IoIosArrowBack /></button>
    )
}