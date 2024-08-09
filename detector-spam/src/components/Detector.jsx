import { React, useState } from 'react'

export default function Detector() {
  const [inputText, setInputText] = useState('')
  const [prediction, setPrediction] = useState('')

  const handleInputChange = (e) => {
    setInputText(e.target.value)
  }

  const mostrarPrediccion = () => {
  
    if (prediction === 1) {
        return (
            <div className="alert alert-danger" role="alert">
            <strong>Spam!</strong> El mensaje de correo electronico es spam.
            </div>
        )
    }
    if (prediction === 0) {
        return (
            <div className="alert alert-success" role="alert">
            <strong>No Spam!</strong> El mensaje de correo electronico no es spam.
            </div>
        )
    }
    return (
        <div className="alert alert-warning" role="alert">
        <strong>Advertencia!</strong> Aun no se ha realizado la prediccion.
        </div>
    );
    }

  const handleSubmit = async () => {
    const plainText = inputText.replace(/(\r\n|\n|\r)/gm, ' ');
    const url = "http://174.138.111.13:5000/predict";
    const data = { "features": plainText };
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const json = await response.json();
        console.log(json.prediction[0]);
        setPrediction(json.prediction[0]);
    }catch(error){
        console.log(error);
    }
  }

  return (
    <>
      <section className="container">
        <div className="row">
          <div className="col-lg-6">
            <p className="lead text-muted">
              El detector de spam es un programa que se encarga de analizar
              mensajes de texto para determinar si son spam o no. En este
              proyecto, se implementa un detector de spam utilizando el dataset
              publico de Spambase. Este dataset contiene 4601 instancias de
              mensajes de correo electronico etiquetados como spam o no spam.
              Cada instancia contiene 57 atributos que describen diferentes
              caracteristicas de los mensajes de correo electronico. Puede
              revisar el dataset en el siguiente enlace:{' '}
              <a href="https://archive.ics.uci.edu/ml/datasets/spambase">
                Spambase
              </a>
              <br />
              <br />
              Además de revisar el entrenamiento del modelo en el siguiente
              enlace:{' '}
              <a href="https://github.com/Defiant7426/Spam-Detectation">
                Spam-Detectation
              </a>
            </p>

            <textarea
              className="form-control"
              id="message"
              value={inputText}
              onChange={handleInputChange}
              rows="20"
              cols="100"
              placeholder="Intenta escribir un mensaje de correo electronico para determinar si es spam o no, por su puesto en ingles ;)"
            />
            <br />
            <br />
            <button onClick={handleSubmit} className="btn btn-primary">
              Detectar Spam
            </button>
            <br />
            <br />
            {mostrarPrediccion()}
          </div>
        </div>
      </section>
    </>
  )
}
