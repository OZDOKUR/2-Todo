import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("Bir öğe girin");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldItems) => [...oldItems, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App ">
      <h1>Yapılacaklar Listesi</h1>
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Bir öğe ekleyin"
            aria-label="Bir öğe ekleyin"
            aria-describedby="button-addon2"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          ></input>
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={() => addItem()}
          >
            Ekle
          </button>
        </div>
      </div>

      <ul></ul>
      <ul className="list-group list-group-flush">
        {items.map((item) => {
          return (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={item.id}
            >
              {item.value}
              <button
                className="btn btn-danger"
                onClick={() => deleteItem(item.id)}
              >
                Sil
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
