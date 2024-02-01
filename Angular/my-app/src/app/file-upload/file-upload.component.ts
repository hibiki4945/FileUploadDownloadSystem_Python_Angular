import { Component, OnInit } from '@angular/core';
// axiosでapiと接続
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [
    // CommonModule,
    FormsModule,],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {

  // アプロード用（ファイルを入れる）
  param = new FormData();
  // アプロード用（Content-Typeをファイルと設定）
  config = {
      headers:{'Content-Type':'multipart/form-data'}
  };

  // ファイルのアプロード
  updateSend(){
    console.log("updateSend!");
    this.param.append('clientName','A01');
    // // 未選択の場合の対処
    // if(this.param.get('file') === null){
    //     alert("ファイルを選択してください")
    //     return;
    // }
    // // ファイルが100MBを超える場合の対処
    // if(this.param.get('file').size >= 100000000){ //100MB
    //     alert("100MB以内のファイルを選択してください")
    //     return;
    // }
    // ファイルのアプロード
    axios.post('http://localhost:8000/upload',this.param,this.config)
    .then(response=>{
        if(response.data.code === "200"){
            // メッセージを画面に表示
            alert("アプロードしました");
            
            // this.searchAll();
        }
        else{
            alert("ファイル名が被った");
        }

    })
  };
  // 選択したファイルを更新（paramに入れる）
  update(event: Event){
      // console.log("update!")
      const element = event.currentTarget as HTMLInputElement;
      this.param = new FormData();
      if(element.files != null){
        for(let i = 0; i < element.files!.length; i++){
          this.param.append("files",element.files![i]);
          // console.log("this.param: "+this.param);
        }
      }
  };
}
