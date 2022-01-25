
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';

const apiURL = "http://localhost:3000";
// const apiURL = "https://reactnative.dev/movies.json"


const axios = require('axios');

// Make a request for a user with a given ID
axios.get("http://localhost:3000/users")
  .then(function (response) {
    // handle success
    console.log(response);
    let prout = JSON.stringify(response)
    console.log(prout);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

const App = () => {
  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);
  // const [title, setTitle] = useState([]);
  // const [description, setDescription] = useState([]);

  // useEffect(() => {
  fetch(apiURL + '/users', {
    mode: 'cors',
    method: 'GET',
    // headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
    // }
  })
    // .then((response) => { response.json() })
    .then((response) => {
      console.log(response);
      response.json();
    })
    .then((json) => {

      console.log(apiURL + '/users');
      console.log(JSON.stringify(json));
      return json;
      //   // setData(json.username);
      //   // setTitle(json.id_avatar);
      //   // setDescription(json.role);

    })
  // .catch((error) => alert(error))
  // .finally(setLoading(false));
  // }, []); // cycle de vie du hook
  return (
    <Text>coucou</Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;