import { Component, OnInit, AfterViewInit  } from '@angular/core';
import {AreaService} from '../servicios/area.service';
import { area, details } from '../modelos/areas'; // IMPORTAR

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, AfterViewInit {

  constructor(private areaService: AreaService) {
    console.log('constructor');
    this.getAreas();
   } // INSTANCIAR

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  areas: area[];
  details: details = {"town":"", "boss":"", "age":0, "last_degree":""};

  onClickMe(item: area){
    this.details = item.details[0];
    console.log('detalles', this.details);
  }

  async getAreas(){
    await this.areaService.getArea().toPromise().then(us => {
      this.areas = us.areas;
      //console.log(us);
      console.log(us.areas);
    });
  }
}