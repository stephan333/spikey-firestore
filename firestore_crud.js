// Firebase SDK
const firebase = require('firebase');

// Library
require('firebase/firestore');

// Config (not committed)
const config = require('./config');

// Initialize app
firebase.initializeApp(config);

// Create database object
const db = firebase.firestore();

function addSingleUserDoc() {
  db.collection('users')
    .add({
      name: 'Bla',
      email: 'blubb@vdxsddf.com'
    })
    .then(docRef => console.log('Document written: ', docRef.id));
}

// addSingleUserDoc();

const colRef = db.collection('restaurants');

function addRestCollection() {
  colRef.doc('rest_01').set({
    email: 'my@mail.xx',
    names: {
      a: 'aa',
      b: 'bb'
    },
    namesArray: [
      {
        c: 'cc',
        d: 'dd'
      }
    ]
  });
}

// addRestCollection();

function updateRestCollection() {
  colRef.doc('rest_01').update({
    email: 'stephan-my@mail.xx'
  });
}

// updateRestCollection();

function readRestCollection() {
  colRef
    .doc('rest_01')
    .get()
    .then(doc => console.log(doc.data()));
}

// readRestCollection();

function deleteRestCollection() {
  colRef
    .doc('rest_01')
    .delete()
    .then(doc => console.log('deleted'));
}

deleteRestCollection();
