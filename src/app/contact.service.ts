import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Contact } from './contact';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  //retrieving ContactService
  constructor(private http: Http) { }

  //get contacts method
  getContacts(){
    return this.http.get('http://34.209.243.135:3000/api/contacts')
     .pipe(map( res => res.json() ) );
  }

  //add contact method
  addContact(newContact){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://34.209.243.135:3000/api/contact', newContact, {headers:headers})
      .pipe(map( res => res.json() ) );
  }

  //delete method
  deleteContact(id){
    return this.http.delete('http://34.209.243.135:3000/api/contact/'+id)
      .pipe(map( res => res.json() ) );
  }

}
