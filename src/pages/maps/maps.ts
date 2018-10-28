import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


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

  constructor(public geolocation: Geolocation, private alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
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

  confirmar(laboratorio, telefone) {
    let alert = this.alertCtrl.create({
      title: laboratorio + ' | ' + telefone,
      subTitle: 'Adicionar favorito',
      message: 'Você deseja adicionar ' + laboratorio + ' como laboratório preferencial? Após definido só poderá ser alterado na secretaria de saúde',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Adicionar',
          handler: () => {
            localStorage.setItem('laboratorio', laboratorio);
          }
        }
      ],
      cssClass: 'alert-map'
    });

    alert.present();
  }

  addMarker(map: any, latLng) {
    var image = 'https://png.icons8.com/color/30/000000/test-tube.png';
    var localAtual = 'https://i.imgur.com/LeXfkus.png';
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

    marker.addListener('click', function () {
      var infoWindow = 'BioAnalises',
      telefone = '(16) 3700-0000'
      this.confirmar(infoWindow, telefone);
    }.bind(this));

    var marker2 = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.5370547, -47.3997377),
      icon: image
    });
    marker2.addListener('click', function () {
      var infoWindow = 'Carlos Chagas',
      telefone = '(16) 3700-0000'
      this.confirmar(infoWindow, telefone);
    }.bind(this));


    var marker3 = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.5392807, -47.3959326),
      icon: image
    });
    marker3.addListener('click', function () {
      var infoWindow = 'Central',
      telefone = '(16) 3700-0000'
      this.confirmar(infoWindow, telefone);
    }.bind(this));


    var marker4 = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.5386885, -47.396068),
      icon: image
    });
    marker4.addListener('click', function () {
      var infoWindow = 'Dr. Alonso Laboratório',
      telefone = '(16) 3700-0000'
      this.confirmar(infoWindow, telefone);
    }.bind(this));


    var marker5 = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.5396672, -47.3963436),
      icon: image
    });
    marker5.addListener('click', function () {
      var infoWindow = 'LabCenter',
      telefone = '(16) 3700-0000'
      this.confirmar(infoWindow, telefone);
    }.bind(this));


    var marker6 = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.534703, -47.4029826),
      icon: image
    });
    marker6.addListener('click', function () {
      var infoWindow = 'Laboratório Municipal',
      telefone = '(16) 3700-0000'
      this.confirmar(infoWindow, telefone);
    }.bind(this));

    var marker7 = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.5706224, -47.4031436),
      icon: image
    });
    marker7.addListener('click', function () {
      var infoWindow = 'Laboratório UNIFRAN',
      telefone = '(16) 3700-0000'
      this.confirmar(infoWindow, telefone);
    }.bind(this));


    var marker8 = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.5365584, -47.3975932),
      icon: image
    });
    marker8.addListener('click', function () {
      var infoWindow = 'Laborial',
      telefone = '(16) 3700-0000'
      this.confirmar(infoWindow, telefone);
    }.bind(this));


    var marker9 = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.5379457, -47.3988805),
      icon: image
    });
    marker9.addListener('click', function () {
      var infoWindow = 'Santa Casa',
      telefone = '(16) 3700-0000'
      this.confirmar(infoWindow, telefone);
    }.bind(this));


    var marker10 = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.5109961, -47.4026196),
      icon: image
    });
    marker10.addListener('click', function () {
      var infoWindow = 'Hormolab',
      telefone = '(16) 3700-0000'
      this.confirmar(infoWindow, telefone);
    }.bind(this));


    var marker11 = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.5362587, -47.4139846),
      icon: image
    });
    marker11.addListener('click', function () {
      var infoWindow = 'Hormolab',
      telefone = '(16) 3700-0000'
      this.confirmar(infoWindow, telefone);
    }.bind(this));


    var marker12 = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.5363928, -47.3986199),
      icon: image
    });
    marker12.addListener('click', function () {
      var infoWindow = 'Hormolab',
      telefone = '(16) 3700-0000'
      this.confirmar(infoWindow, telefone);
    }.bind(this));


    var marker13 = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.5369669, -47.389437),
      icon: image
    });
    marker13.addListener('click', function () {
      var infoWindow = 'Hormolab',
      telefone = '(16) 3700-0000'
      this.confirmar(infoWindow, telefone);
    }.bind(this));


    var marker14 = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(-20.5254519, -47.3639889),
      icon: image
    });
    marker14.addListener('click', function () {
      var infoWindow = 'Hormolab',
      telefone = '(16) 3700-0000'
      this.confirmar(infoWindow, telefone);
    }.bind(this));
  }
}