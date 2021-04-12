import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://murmuring-chamber-44702.herokuapp.com/' 
    
});

//example 'http://localhost:5000/'
export default instance;