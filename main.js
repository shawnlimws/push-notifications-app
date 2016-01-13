(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var reg;
var sub;
var isSubscribed = false;
var subscribeButton = document.querySelector('button');

if ('serviceWorker' in navigator) {
  console.log('Service Worker is supported');
  navigator.serviceWorker.register('sw.js').then(function () {
    return navigator.serviceWorker.ready;
  }).then(function (serviceWorkerRegistration) {
    reg = serviceWorkerRegistration;
    subscribeButton.disabled = false;
    console.log('Service Worker is ready :^)', reg);
  }).catch(function (error) {
    console.log('Service Worker Error :^(', error);
  });
}

subscribeButton.addEventListener('click', function () {
  if (isSubscribed) {
    unsubscribe();
  } else {
    subscribe();
  }
});

// subscribe and unsubscribe button
function subscribe() {
  reg.pushManager.subscribe({ userVisibleOnly: true }).then(function (pushSubscription) {
    sub = pushSubscription;
    console.log('Subscribed! Endpoint:', sub.endpoint);
    subscribeButton.textContent = 'Unsubscribe';
    isSubscribed = true;
    var emailString = document.querySelector('input').value
    db.put({
      _id: emailString,
      endpointID: sub.endpoint
    }).then(function (response) {
      // handle response
    }).catch(function (err) {
      console.log(err);
    });
    // db.info().then(function (info) {
    //   console.log(info)
    // })
  });
}

function unsubscribe() {
  sub.unsubscribe().then(function (event) {
    subscribeButton.textContent = 'Subscribe';
    console.log('Unsubscribed!', event);
    isSubscribed = false;
  }).catch(function (error) {
    console.log('Error unsubscribing', error);
    subscribeButton.textContent = 'Subscribe';
  });
}

// database code
/* global PouchDB */
var db = new PouchDB('http://localhost:5984/crmusers');
// db.info().then(function (info) {
//   console.log(info)
// })
// PouchDB.debug.enable('*')

},{}]},{},[1]);
