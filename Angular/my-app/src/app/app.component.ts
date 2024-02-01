import { Component, ChangeDetectionStrategy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'ngx-easy-table';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from './Table/Data/usersTable.module';
import { TrashCanTableModule } from './Table/TrashCan/usersTable.module';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
// axiosでapiと接続
import axios from 'axios';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     RouterOutlet,
//     CommonModule,
//     FormsModule,
//     ReactiveFormsModule,
//     TableModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent],
//   // templateUrl: './app.component.html',
//   // styleUrl: './app.component.css',
//   // changeDetection: ChangeDetectionStrategy.OnPush,
//   }
// )

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    NgbAlert,
    DataTableModule,
    HttpClientModule,
    TrashCanTableModule,
    CrisisListComponent,
    HeroesListComponent,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'my-app';

  // アプロード用（ファイルを入れる）
  param = new FormData();
  // アプロード用（Content-Typeをファイルと設定）
  config = {
      headers:{'Content-Type':'multipart/form-data'}
  };
  // ダウンロードに必要なデータ
  paramDownload = new FormData();

  paramMultipleDownload = new FormData();

  // ダウンロードしたファイルのパス
  pathLocal = "";
  // // テーブルのタイトル
  // headers = [
  //     { text: "動作", value: "do" },
  //     { text: "ファイル名", value: "name"},
  //     { text: "ファイルサイズ", value: "size"},
  //     { text: "アプロード日付", value: "date", sortable: true},
  //     { text: "ファイル形式", value: "format"},
  //     { text: "ファイルパス", value: "path"},
  // ];
  // テーブルの内容
  items = [];
  // テーブルの内容（削除したデータ）
  itemsTrashCan = [];
  // ユーザー名
  clientName = "A01";
  // ファイルパス
  filePath = "";
  // ファイルパス（更新）
  filePathNew = "";
  
  // ダウンロードに必要なデータ
  paramFilePath = new FormData();

  // itemsSelected:string[] = [];
  itemsSelected = [];

  trashCanItemsSelected = [];

  saveName = "saveName!";
  name = "name!";


  ngOnInit() {
    console.log("ngOnInit()!");
    this.searchFilePath();
  }

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
  // ファイルパスを探す
  searchFilePath(){
      // 最初にデータベースにある資料を検索
      // axios.post('http://localhost:8000/searchFilePath')
      axios.post('http://localhost:8000/searchFilePath')
          .then(response=>{
              this.filePath = response.data.path
          })
  };
  // 保存フォルダーを更新
  filePathUpdate(){
      console.log("filePathUpdate!");
      console.log("this.filePath: "+this.filePath);
      // パスの入力かをチェック
      if(this.filePathNew.length === 0){
          alert("パスを入力してください")
          return
      }

      this.paramFilePath.append('path',this.filePathNew);
      axios.post('http://localhost:8000/updateFilePath',this.paramFilePath)
          .then(response=>{
              console.log("filePathUpdate!")
              if(response.data.code === "200"){
                  console.log("200")
                  this.filePathNew = ''
                  this.searchFilePath();
                  alert("パスの変更は成功しました")
              }
              else{
                  console.log("400")
                  alert("パスは存在しません")
              }
          })
  };

}
