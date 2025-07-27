from flask import Flask , request, jsonify # type: ignore
from firebase import firebase # type: ignore
import requests



app = Flask(__name__)
db = []
# https://[project-id].firebaseio.com

firebase = firebase.FirebaseApplication('https://arduweatherx-default-rtdb.firebaseio.com', None)

def generate_sensor_data():
    data = requests.get('127.0.0.1/data')
    return data

@app.route('/')
def index():
    return f"<h1> Welcome to ArduWeatherX </h1> </br> <p>{db}</>"

@app.route('/data', methods = ["POST"])
def data():
    """Receive data from sensor simulator and store in Firebase"""
    try:
        sensor_data = request.json
            
        # Store in Firebase
        firebase.post('/weather', sensor_data)
        
        return jsonify({"status": "success", "data": sensor_data})
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/firebase')
def test():
    response = firebase.get('/weather', None)
    return response

@app.route('/simulate', methods = ['POST'])
def simulate_data():
    data = generate_sensor_data()
    result = firebase.post('/weather', data)

def test():
    response = firebase.get('/weather', None)
    return response


if __name__ == "__main__":
    app.run(debug='True')

