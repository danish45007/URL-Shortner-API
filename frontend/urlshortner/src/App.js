import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Base from './Base'

export default function App() {
  return (
    <Base title="Home Page" description="Welcome to the Danny's Store">
      <div className="row text-center">
        <h1 className="text-white">All Of Our Products :</h1>
        <div className="row">
        </div>
      </div>
    </Base>
  );
}
