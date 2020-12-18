import { Injectable } from '@angular/core';
import { crudService } from '../crud/services/generic.service';
import { User } from '../../modeles/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormulaireService extends crudService<User, number>{

  constructor(http: HttpClient ) {
    super(http, "http://localhost:3002/Api");
  }
}
