import React from 'react';
import './App.css';

const Popup = ({ selectedUser, handleConfirm, setSelectedUser }) => {
    return (
        <div className="popup">
          <div className="popupInner">
            <h3 className="popupHeading">Zaprosić?</h3>
            <ul>
              <li className="registeredUsersList">
                <img className="userIcon" src={require('./userIcon.png')} alt="user icon" />
                {selectedUser.userName} {selectedUser.userSurname}
                {selectedUser.userVip && <img className="vipIcon" src={require('./vipIcon.png')} alt="vip icon" />}
              </li>
            </ul>
            <div className="inviteButtons">
              <button className="inviteConfirmButton" onClick={handleConfirm}>
                Tak
              </button>
              <button className="inviteDeclineButton" onClick={() => setSelectedUser(null)}>
                Nie
              </button>
            </div>
          </div>
        </div>
      );
};

export default Popup;