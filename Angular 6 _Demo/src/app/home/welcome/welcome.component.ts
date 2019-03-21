import { Component, OnInit, Pipe } from '@angular/core';
import { FormControl , FormBuilder, FormGroup, FormArray} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

declare var $; 
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
  })
export class WelcomeComponent implements OnInit {

  pageTitle: string = 'Welcome';
  form : FormGroup;
  searchbox = [''];
  data : string = '';
  showImage: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {

      this.form = this.fb.group(
        {
          brandName: [''],
          email: [''],
          products: this.fb.array([this.createProduct()])
        }); 
      console.log(this.form);
  }
  addProduct() {
    const product = this.createProduct();
    this.products.push(product);
  }

  removeProduct() {
    const product = this.createProduct();
    // this.products.removeAt(product);
  }

  get products(): FormArray {
    return this.form.get('products') as FormArray;
  }

  createProduct(): FormGroup {
    return this.fb.group({
      name: [''],
      description: [''],
      price: ['']
    });
  }
  
  saveProduct(){
    // console.log(this.form.value);
    this.showImage = !this.showImage;
    this.data = JSON.stringify(this.form.value);
    // console.log(this.data);
    // to add in local storage
    let key = '';
    localStorage.setItem(key, this.data);
    let myItem = localStorage.getItem(key);
    console.log(myItem); 
    
  }
  
  filesPicked(files) {
    const x = 10485;
    // var filesize = 0;
    for (let i = 0; i <= files.length; i++) {
        const file = files[i];
        var fileSize;
        if(i != files.length)
        {
          fileSize = files[i].size;
        } 
        else {
          console.log(fileSize);
          if(fileSize < x)
          { 
            alert('file size is more than ' + x + 'Please Select other folder');
            fileSize = null;
          }
          else if (fileSize == 0){
            alert('file size is 0 '+fileSize+ ' Please Select other folder  ');
          }
        }
      }
}

  myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  
  }
}
