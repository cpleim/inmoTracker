var firebase = require('firebase');

firebase.initializeApp({
  "serviceAccount": "./service-account.json",
  "databaseURL": "https://XXX.firebaseio.com/"
});

var ref = firebase.app().database().ref();
var usersRef = ref.child('users');

var delayedPush = function (user) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      usersRef.push(user)
        .then(resolve, reject);
    }, 1);
  });
};

delayedPush({
  name: 'First User',
  time: (new Date()).getTime()
})
.then(function() {
  return delayedPush({
    name: 'Second User',
    time: (new Date()).getTime()
  });
})
.then(function() {
  return delayedPush({
    name: 'Third User',
    time: (new Date()).getTime()
  });
})
.then(function() {
  usersRef.orderByKey().on('child_added', function(snap) {
    console.log(snap.getKey(), snap.val());
  });
})
.catch(function(err) {
  console.log('error', err);
});