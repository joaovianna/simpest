/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

    }



};

if(true)
{
    socket = io.connect('http://jornal.us:7777');
    socket.on('connect', function(){
              navigator.notification.alert("Connected", function() {});
              
              socket.emit('register', usuario );
              });
    socket.on('disconnect', function () {
              navigator.notification.alert("Disconnected from Base", function() {});
              });
    socket.on('error', function(){
              navigator.notification.alert("Connection failed trying to reach Base", function() {});
              
              });
    socket.on('connect_failed', function(){
              navigator.notification.alert("Connection failed trying to reach Base", function() {});
              });
    socket.on('reconnect', function(){
              navigator.notification.alert("Reconnecting to reach Base", function() {});
              });
}


$(document).ready(function() {
        $.get("http://www.jornal.us/cordova/radio/listaradios.php", function(data){
                    $("#result").html(data).trigger("create");
            });

});