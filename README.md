# Detector de Spam

![Untitled](Detector%20de%20Spam%20a4f901655e654c9e8645c34b4173c32e/Untitled.png)

Este proyecto es una aplicación web que predice si un mensaje es spam o no. Utiliza React para el frontend y Flask para el backend, junto con un modelo de machine learning (.pkl) para realizar las predicciones. 

## Estructura del Proyecto

El proyecto está dividido en dos partes principales:

- Frontend (React usando JS, HTML, CSS)
- Backend (Flask + Modelo ML)

El backend lo puede encontrar en el siguiente repositorio: https://github.com/Defiant7426/Spam-Detector-Flask

El entrenamiento del modelo lo puede encontrar aquí: [Defiant7426/Spam-Detectation (github.com)](https://github.com/Defiant7426/Spam-Detectation)

## API Endpoints

POST /predict: Recibe un mensaje y devuelve la predicción (spam o no spam)

## Flujo de Trabajo

1. El usuario ingresa un mensaje en la interfaz de React.
2. El frontend envía el mensaje al backend a través de una solicitud POST.
3. Se procesa la solicitud ajustándolo para el input del modelo.
4. El backend carga el modelo .pkl y utiliza el mensaje para hacer una predicción.
5. El resultado se devuelve al frontend y se muestra al usuario.

## Despliegue

Para el despligue del backen de utilizo DigitalOcean usando un droplet de Docker y para el frontend netlify 

## Tecnologias usadas

- React
- Flask
- Scikit-learn
- Docker
- DigitalOcean p
- Netlify
- Postman
- Jupyter-notebook
- JS
- HTML
- CSS