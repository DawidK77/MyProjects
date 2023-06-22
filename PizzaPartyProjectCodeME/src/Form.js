import { useState } from 'react';
import './App.css';

const Form = ({ handleFormSubmit, handleUserClick, submittedUsers, selectedPizza, handlePizzaSelect }) => {
  const initialUser = { userName: '', userSurname: '', userDesc: '', userVip: false, pizza: '' };
  const [newUser, setNewUser] = useState(initialUser);
  const [users, setUsers] = useState([]);

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers([...users, newUser]);
    handleFormSubmit(newUser);
    setNewUser(initialUser);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <span className="formInput">
          <input
            onChange={handleInputChange}
            value={newUser.userName}
            className="textInputStyling"
            type="text"
            name="userName"
            placeholder="Imię"
            required
          />
        </span>
        <span className="formInput">
          <input
            onChange={handleInputChange}
            value={newUser.userSurname}
            className="textInputStyling"
            type="text"
            name="userSurname"
            placeholder="Nazwisko"
            required
          />
        </span>
        <span className="formInput">
          <textarea
            onChange={handleInputChange}
            value={newUser.userDesc}
            className="textInputStyling"
            name="userDesc"
            placeholder="Opis"
            rows="4"
            cols="50"
          ></textarea>
        </span>
        <span className="formInput">
          VIP:{' '}
          <input onChange={handleInputChange} checked={newUser.userVip} type="checkbox" name="userVip" />
        </span>
        <span className="formInput">
          Ulubiona Pizza
          <select
            className="pizzaSelection"
            value={newUser.pizza}
            onChange={(event) => handlePizzaSelect(event.target.value)}
            name="pizza"
          >
            <option value="margherita">Margherita</option>
            <option value="hawaii">Hawajska</option>
            <option value="cheese">Cztery sery</option>
            <option value="mexicana">Mexicana</option>
          </select>
        </span>
        <span className="formInput">
          <input className="submitButton" type="submit" value="Dodaj" />
        </span>
      </form>
      <ul>
        {submittedUsers.map((user, i) => (
          <li className="registeredUsersList" key={i} onClick={() => handleUserClick(user)}>
            <img className="userIcon" src={require('./userIcon.png')} alt="user icon" />
            {user.userName} {user.userSurname}
            {user.userVip && <img className="vipIcon" src={require('./vipIcon.png')} alt="vip icon" />}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Form;