import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { LatLng } from '@ionic-native/google-maps';

declare var google;

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html'
})
export class MapsPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  start = 'chicago, il';
  end = 'chicago, il';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController, public geolocation: Geolocation) {

  }

  ionViewDidLoad(){
    this.initMap();
  }

  initMap() {
    this.geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.addMarker(this.map, latLng);
    });

    this.directionsDisplay.setMap(this.map);
  }
  addMarker(map:any, latLng){
    var image = 'https://png.icons8.com/color/30/000000/test-tube.png';
    var localAtual =  'https://png.icons8.com/color/30/B1D2E6/marker.png';
    var marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: latLng,
      icon: localAtual
    });

    var marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.5396044, -47.3998592),
      icon: image
    });
    var infoWindow = new google.maps.InfoWindow({
      content: 'BioAnalises - Telefone: 3722-9005'
    });
    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });

    
    var marker2 = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.5370547, -47.3997377),
      icon: image
    });
    var infoWindow2 = new google.maps.InfoWindow({
      content: 'Carlos Chagas - Telefone: 3722-4375'
    });
    marker2.addListener('click', function() {
      infoWindow2.open(map, marker2);
    });


    var marker3 = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.5392807, -47.3959326),
      icon: image
    });
    var infoWindow3 = new google.maps.InfoWindow({
      content: 'Central - Telefone: 3722-6161'
    });
    marker3.addListener('click', function() {
      infoWindow3.open(map, marker3);
    });


    var marker4 = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.5386885, -47.396068),
      icon: image
    });
    var infoWindow4 = new google.maps.InfoWindow({
      content: 'Dr. Alonso Laboratório - Telefone: 3721-2800'
    });
    marker4.addListener('click', function() {
      infoWindow4.open(map, marker4);
    });


    var marker5 = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.5396672, -47.3963436),
      icon: image
    });
    var infoWindow5 = new google.maps.InfoWindow({
      content: 'Labcenter - Telefone: 3724-3444'
    });
    marker5.addListener('click', function() {
      infoWindow5.open(map, marker5);
    });


    var marker6 = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.534703, -47.4029826),
      icon: image
    });
    var infoWindow6 = new google.maps.InfoWindow({
      content: 'Laboratorio Municipal - Telefone: 3721-1843'
    });
    marker6.addListener('click', function() {
      infoWindow6.open(map, marker6);
    });

    var marker7 = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.5706224, -47.4031436),
      icon: image
    });
    var infoWindow7 = new google.maps.InfoWindow({
      content: 'Laboratório UNIFRAN - Telefone: 3711-8874'
    });
    marker7.addListener('click', function() {
      infoWindow7.open(map, marker7);
    });


    var marker8 = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.5365584, -47.3975932),
      icon: image
    });
    var infoWindow8 = new google.maps.InfoWindow({
      content: 'Laborial - Telefone: 3724-0776'
    });
    marker8.addListener('click', function() {
      infoWindow8.open(map, marker8);
    });


    var marker9 = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.5379457, -47.3988805),
      icon: image
    });
    var infoWindow9 = new google.maps.InfoWindow({
      content: 'Santa Casa - Telefone: 3711-4000'
    });
    marker9.addListener('click', function() {
      infoWindow9.open(map, marker9);
    });


    var marker10 = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.5109961, -47.4026196),
      icon: image
    });
    var infoWindow10 = new google.maps.InfoWindow({
      content: 'Hormolab - Telefone: 3721-1543'
    });
    marker10.addListener('click', function() {
      infoWindow10.open(map, marker10);
    });


    var marker11 = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.5362587, -47.4139846),
      icon: image
    });
    var infoWindow11 = new google.maps.InfoWindow({
      content: 'Hormolab - Telefone: 3721-1543'
    });
    marker11.addListener('click', function() {
      infoWindow11.open(map, marker11);
    });


    var marker12 = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.5363928, -47.3986199),
      icon: image
    });
    var infoWindow12 = new google.maps.InfoWindow({
      content: 'Hormolab - Telefone: 3721-1543'
    });
    marker12.addListener('click', function() {
      infoWindow12.open(map, marker12);
    });


    var marker13 = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.5369669, -47.389437),
      icon: image
    });
    var infoWindow13 = new google.maps.InfoWindow({
      content: 'Hormolab - Telefone: 3721-1543'
    });
    marker13.addListener('click', function() {
      infoWindow13.open(map, marker13);
    });


    var marker14 = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.5254519, -47.3639889),
      icon: image
    });
    var infoWindow14 = new google.maps.InfoWindow({
      content: 'Hormolab - Telefone: 3721-1543'
    });
    marker14.addListener('click', function() {
      infoWindow14.open(map, marker14);
    });
  }
}