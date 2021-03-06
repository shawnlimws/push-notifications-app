'use strict'

var reg
var sub
var isSubscribed = false
var subscribeButton = document.querySelector('button')

if ('serviceWorker' in navigator) {
  console.log('Service Worker is supported')
  navigator.serviceWorker.register('sw.js').then(function () {
    return navigator.serviceWorker.ready
  }).then(function (serviceWorkerRegistration) {
    reg = serviceWorkerRegistration
    subscribeButton.disabled = false
    console.log('Service Worker is ready :^)', reg)
  }).catch(function (error) {
    console.log('Service Worker Error :^(', error)
  })
}

subscribeButton.addEventListener('click', function () {
  if (isSubscribed) {
    unsubscribe()
  } else {
    subscribe()
  }
})

// subscribe and unsubscribe button
function subscribe () {
  reg.pushManager.subscribe({userVisibleOnly: true}).then(function (pushSubscription) {
    sub = pushSubscription
    console.log('Subscribed! Endpoint:', sub.endpoint)
    subscribeButton.textContent = 'Unsubscribe'
    isSubscribed = true
    // adding user to database
    var endpointString = sub.endpoint.split('send/').pop()
    var emailString = document.querySelector('input').value
    db.put({
      _id: emailString,
      endpointID: endpointString
    }).then(function (response) {
      // handle response
    }).catch(function (err) {
      console.log(err)
    })
    // db.info().then(function (info) {
    //   console.log(info)
    // })
    document.querySelector('input').value = ''
    document.querySelector('input').placeholder = 'type email here'
  })
}

function unsubscribe () {
  sub.unsubscribe().then(function (event) {
    subscribeButton.textContent = 'Subscribe'
    console.log('Unsubscribed!', event)
    isSubscribed = false
    // removing user from database
    var emailString = document.querySelector('input').value
    db.get(emailString).then(function (doc) {
      return db.remove(doc)
    }).then(function (result) {
  // handle result
    }).catch(function (err) {
      console.log(err)
    })
  }).catch(function (error) {
    console.log('Error unsubscribing', error)
    subscribeButton.textContent = 'Subscribe'
  })
}

// database code
/* global PouchDB */
var db = new PouchDB('https://shawnlimws.cloudant.com/crmusers', {
  auth: {
    username: 'beendtweranteededideplam',
    password: 'ebc1151d92a97d8649d4887945da51980a682b78'
  }
})
// db.info().then(function (info) {
//   console.log(info)
// })
// PouchDB.debug.enable('*')

// retrieving database
db.allDocs({
  include_docs: true
}).then(function (result) {
  var endpointsArray = result.rows.map(function (line) {
    return line.doc.endpointID
  })
  // console.log(endpointsArray)
})
