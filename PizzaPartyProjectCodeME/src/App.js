import { useState } from 'react';
import './App.css';
import FormByChat from './Form';
import Popup from './Popup';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [submittedUsers, setSubmittedUsers] = useState([]);
  const [invitedUsers, setInvitedUsers] = useState([]);
  const [selectedUserInfo, setSelectedUserInfo] = useState(null);
  const [selectedPizza, setSelectedPizza] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setSelectedUserInfo(null);
  };

  const handleConfirm = () => {
    setInvitedUsers((prevInvitedUsers) => [...prevInvitedUsers, selectedUser]);
    setSubmittedUsers((prevSubmittedUsers) =>
      prevSubmittedUsers.filter((user) => user !== selectedUser)
    );
    setSelectedUser(null);
    setSelectedUserInfo(null);
  };

  const handleFormSubmit = (user) => {
    setSubmittedUsers((prevSubmittedUsers) => [...prevSubmittedUsers, user]);
  };

  const handleUserDetailsClick = (user) => {
    setSelectedUserInfo(user);
  };

  return (
    <div className="App">
      <div className="heading">
        <img className="pizzaEventIcon" src={require('./pizzaEventIcon.png')} alt="logo" />
        <h3>
          Pizza <span className="eventWord">Event</span>
        </h3>
      </div>
      <div className="content">
        <div className="leftContent">
          <div className="leftFormDiv">
            <h4 className="contentHeading">Zgłoszenia</h4>
            <FormByChat
              handleFormSubmit={handleFormSubmit}
              handleUserClick={handleUserClick}
              handleUserDetailsClick={handleUserDetailsClick}
              submittedUsers={submittedUsers}
              selectedPizza={selectedPizza}
              handlePizzaSelect={setSelectedPizza}
            />
          </div>
        </div>
        <div className="middleContent">
          <h4 className="contentHeading">Zaproszeni</h4>
          <div className="invitedUsers">
            {invitedUsers.length > 0 && (
              <ul>
                {invitedUsers.map((user, i) => (
                  <li className="registeredUsersList" key={i} onClick={() => handleUserDetailsClick(user)}>
                    <img className="userIcon" src={require('./userIcon.png')} alt="user icon" />
                    {user.userName} {user.userSurname}
                    {user.userVip && <img className="vipIcon" src={require('./vipIcon.png')} alt="vip icon" />}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="invitePopup">
            {selectedUser && (
              <Popup selectedUser={selectedUser} handleConfirm={handleConfirm} setSelectedUser={setSelectedUser} />
            )}
          </div>
        </div>
        <div className="rightContent">
          <h4 className="contentHeading">Szczegóły</h4>
          {selectedUserInfo && (
            <div className="userDetails">
              <span className="userDetailsSpan"><h5><img className="userIcon" src={require('./userIcon.png')} alt="user icon" />{selectedUserInfo.userName} {selectedUserInfo.userSurname}</h5></span>
              <p>{selectedUserInfo.userDesc}</p>
              {selectedUserInfo.userVip && <img className="vipIconDetails" src={require('./vipIcon.png')} alt="vip icon" />}
              <p>{selectedUserInfo.pizza}</p>
              {selectedPizza === 'margherita' && <img className="pizzaImages" src={require('./margherita.png')} alt="Margherita" />}
              {selectedPizza === 'hawaii' && <img className="pizzaImages" src={require('./hawaii.png')} alt="Hawajska" />}
              {selectedPizza === 'cheese' && <img className="pizzaImages" src={require('./cheese.png')} alt="Cztery sery" />}
              {selectedPizza === 'mexicana' && <img className="pizzaImages" src={require('./mexicana.png')} alt="Mexicana" />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;