import "../components/Header";

import { FaInbox, FaCalendar, FaCalendarAlt } from "react-icons/fa";
import Header from "../components/Header";
import "./App.scss";
import ListItem from "../components/Listitem";

function App() {
  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar__category">
            <ul className="list">
              <ListItem text="Inbox" icon={<FaInbox className="list__item__icon"/>} />
              <ListItem text="Today" icon={<FaCalendar className="list__item__icon"/>} />
              <ListItem text="Next 7 day" icon={<FaCalendarAlt className="list__item__icon"/>} />
            </ul>
          </section>
          <section className="sidebar__category">2</section>
        </aside>
      </div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
