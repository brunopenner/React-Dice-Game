import "./Button.css"

export default function Button({clickFunc, label="click Me"}) {
    return <button onClick={clickFunc} className="Button">{label}</button>
}