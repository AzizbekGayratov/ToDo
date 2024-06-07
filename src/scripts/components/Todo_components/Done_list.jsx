import '../../../stylesheets/css/main.css'

export default function Form(props) {
    
    return (
        <div className="done__todo__list">
            <h2 className="done__todo__list__title">Done - {props.count}</h2>
            <ul className="done__todo__list__box">
                {props.done.map(item => {
                    return (
                        <li key={item.id} className="done__todo__list__item">
                            <p className="done__todo__item__text">{item.title}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}