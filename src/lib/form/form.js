import "../../components/formPage.css"

export default function Form(prop) {
    return (
    <div className="div-form">
        <h2>{prop.title}</h2>
        <form action={prop.action} method={prop.method} name={prop.name}>
            <div className={prop.divgroup}>
                {prop.children}
            </div>
            <div className={prop.classButton}>
                <button type="submit" className="guardar"  >{prop.nameButton}</button>
            </div>
        </form>
    </div>
    )
}