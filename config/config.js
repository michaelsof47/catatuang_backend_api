var firebase = require('firebase')

var firebaseconfig = 
{
    apiKey: "AIzaSyAuEoYVzemSntURGdVhPyuBKMmrA4HFVxE",
    authDomain: "catatuang-868a1.firebaseapp.com",
    databaseURL: "https://catatuang-868a1-default-rtdb.firebaseio.com",
    projectId: "catatuang-868a1",
    storageBucket: "catatuang-868a1.appspot.com",
    messagingSenderId: "407012303842",
    appId: "1:407012303842:web:7ac85ac57314f2a941cfbb",
    measurementId: "G-46E7L09LYY"
}

firebase.initializeApp(firebaseconfig);
let database = firebase.database;

module.exports = 
{
    init: function()
    {
        return database;
    }
}
