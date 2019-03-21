import { Component, OnInit } from '@angular/core';
import { FormControl , FormBuilder, FormGroup, FormArray} from '@angular/forms';
import { UploadService } from './upload.service';

declare var MSGReader;
declare var $;

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  myFiles: string[] = [];
  instantImage: any;
  title = 'folderAdd';
  form : FormGroup;
  uploadedFilesData: any;
  uploadingDone: boolean = false;
  public fromname: any;
  constructor(private fb : FormBuilder, private uploadService : UploadService){
  }

  ngOnInit(){
    this.form = this.fb.group(
      {
        addFile: [''],
        addFolder: ['']
      }); 
    console.log(this.form);
  }

  savefiles(){
      console.log(this.form.value);
  }

  filesPicked(files,check) {
    console.log(files)
    console.log(check)

    const x = 100000;
    var fileSize;
    // var filesize = 0;
    for (let i = 0; i <= files.length; i++) {
        const file = files[i];
    this.myFiles.push(files[i]);
        
        if(i != files.length)
        {
          fileSize+=files[i].size;
        } 
        else {
          console.log(fileSize);
          if(fileSize < x)
          { 
            alert('file size is more than ' + x + 'Please Select other folder');
            fileSize = null;
            this.form = null;
            return
          }
          else if (fileSize == 0){
            alert('file size is 0 '+fileSize+ ' Please Select other folder  ');
          }
        }
      }
}

getFileDetails(e) {
  console.log(e.target.files);
  for (var i = 0; i < e.target.files.length; i++) {
    this.myFiles.push(e.target.files[i]);
  }

  this.instantImage = 1;
}

uploadFiles() {
  // this.uploadService.showLoader();

  console.log("working");
  const frmData = new FormData();
  

  for (var i = 0; i < this.myFiles.length; i++) {
    frmData.append("files", this.myFiles[i]);
  }
  this.uploadFilesWithName(frmData);
  alert('Uploading Files');
}    

getMsgFileExtensFromName() {
  return new Promise((resolve, reject) => {
    let selectedFile: any = this.myFiles[0];
    var fileReader = new FileReader();
    fileReader.onload = (evt: any) => { 
      var buffer = evt.target.result;
      var msgReader = new MSGReader(buffer);
      var fileData = msgReader.getFileData();
      if (!fileData.error) {
        this.fromname = fileData.senderEmail;
        resolve();
      }
    };
    fileReader.readAsArrayBuffer(selectedFile);
  });
}

uploadFilesWithName(frmData) {
  console.log(frmData);
  this.uploadService.callMethod(frmData).then((s: any) => {
    console.log('result');
    console.log(s);
    
  });
}

}
