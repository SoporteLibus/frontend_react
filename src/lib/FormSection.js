export default function FormSection(prop) {
    return (
        <div className="div-form">
            <div className="div-block">
                <div className="div-block-title">
                    <h1>{prop.title}:</h1>
                </div>
                <div className="div-block-content">
                    {prop.children}
                </div>
            </div>
        </div>
    )
}