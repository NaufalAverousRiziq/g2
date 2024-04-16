
import React from 'react';
import Card from "./Card";
import { contacts } from "./contacts";

function App() {
  return (
    <div className="app">
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contact, index) => (
        <Card
          key={index}
          name={contact.name}
          imgURL={contact.imgURL}
          email={contact.email}
          phone={contact.phone}
        />
      ))}
    </div>
  );
}

export default App;
