
import { FaInbox,FaCalendar,FaCalendarAlt } from "react-icons/fa";
import './Listitem.scss'
function ListItem(prop){
    return(
        <li className="list__item">
                {prop.icon}
                <p className="list__item__text">{prop.text}</p>
              </li>
    )
}

export default ListItem;