import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/interfaces/technology';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  programmingLanguages!:Technology[]
  backendTechs!:Technology[]
  frontendTechs!:Technology[]
  testingTechs!:Technology[]
  devopsTechs!:Technology[]
  networkProtocols!:Technology[]

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/Technologies/technologies.json').subscribe(
      (data:any) => {
        this.programmingLanguages = data.programming_languages as Technology[]
        this.backendTechs = data.backend_techs as Technology[]
        this.frontendTechs = data.frontend_techs as Technology[]
        this.testingTechs = data.testing_techs as Technology[]
        this.devopsTechs = data.devops_techs as Technology[]
        this.networkProtocols = data.network_protocols as Technology[]
      }
    )
  }


}
