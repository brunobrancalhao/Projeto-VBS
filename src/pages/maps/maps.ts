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
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.addMarker(this.map);
    });

    this.directionsDisplay.setMap(this.map);
  }
  addMarker(map:any){
    var image = 'https://png.icons8.com/color/30/000000/test-tube.png';
    var marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.53524503, -47.39349084),
      title: 'Laboratório 1',
      icon: image
    });
    var infoWindow = new google.maps.InfoWindow({
      content: 'Laboratório X'
    });
    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });
    new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.53367768, -47.38117414),
      
    });
  }
}