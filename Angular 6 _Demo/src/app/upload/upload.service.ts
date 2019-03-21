import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class UploadService {


  constructor(private http: HttpClient) { }

 callMethod(Data) {
    return new Promise((resolve, reject) => {
      // var data = JSON.stringify(); 
      axios({
        url: 'http://localhost:3001/upload',
        method: "POST",
        data: Data
      })
        .then(function (response) {
          resolve(response)

        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  }
}