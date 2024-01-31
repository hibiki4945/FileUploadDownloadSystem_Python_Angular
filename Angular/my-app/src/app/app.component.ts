import { Component, ChangeDetectionStrategy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'ngx-easy-table';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
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
  // テーブルのタイトル
  headers = [
      { text: "動作", value: "do" },
      { text: "ファイル名", value: "name"},
      { text: "ファイルサイズ", value: "size"},
      { text: "アプロード日付", value: "date", sortable: true},
      { text: "ファイル形式", value: "format"},
      { text: "ファイルパス", value: "path"},
  ];
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

  
  @ViewChild('actionTpl', { static: true }) actionTpl: TemplateRef<any> | undefined;
  public data: any;
  public columns!: Columns[];
  public configuration!: Config;
  public selected = new Set<number>();
  @ViewChild('pathArea', { static: true }) pathArea: TemplateRef<any> | undefined;

  @ViewChild('actionTplTrashCan', { static: true }) actionTplTrashCan: TemplateRef<any> | undefined;
  public dataTrashCan: any;
  public columnsTrashCan!: Columns[];
  public configurationTrashCan!: Config;
  public selectedTrashCan = new Set<number>();
  @ViewChild('pathAreaTrashCan', { static: true }) pathAreaTrashCan: TemplateRef<any> | undefined;

  

  ngOnInit() {
    console.log("ngOnInit()!");
    this.myFunc();
    this.searchAll();
    this.searchAllTrashCan();
    this.searchFilePath();

    this.configuration = { ...DefaultConfig };
    this.configuration.checkboxes = true;
    this.columns = [
      { key: 'action', title: '動作', cellTemplate: this.actionTpl },
      { key: 'name', title: 'ファイル名' },
      { key: 'size', title: 'ファイルサイズ' },
      { key: 'date', title: 'アプロード日付' },
      { key: 'format', title: 'ファイル形式' },
      { key: 'path', title: 'ファイルパス', cellTemplate: this.pathArea },
    ];
    this.configurationTrashCan = { ...DefaultConfig };
    this.configurationTrashCan.checkboxes = true;
    // this.configurationTrashCan.checkboxes = false;
    this.columnsTrashCan = [
      { key: 'action', title: '動作', cellTemplate: this.actionTplTrashCan },
      { key: 'name', title: 'ファイル名' },
      { key: 'size', title: 'ファイルサイズ' },
      { key: 'date', title: 'アプロード日付' },
      { key: 'format', title: 'ファイル形式' },
      { key: 'path', title: 'ファイルパス', cellTemplate: this.pathAreaTrashCan },
    ];
                  
    // this.data = [
    this.data = [
      // { name: 'ファイル名01', size: 'ファイルサイズ01', date: 'アプロード日付01', format: 'ファイル形式01', path: 'ファイルパス01' },
    ];
    this.dataTrashCan = [
      // { name: 'ファイル名01', size: 'ファイルサイズ01', date: 'アプロード日付01', format: 'ファイル形式01', path: 'ファイルパス01' },
    ];
  }

  remove(rowIndex: number): void {
    this.data = [...this.data.filter((_v: any, k: number) => k !== rowIndex)];
  };

  pathAreaDisplayer(rowIndex: number): string{
    return this.data[rowIndex].path;
  }

  pathAreaTrashCanDisplayer(rowIndex: number): string{
    return this.dataTrashCan[rowIndex].path;
  }

  eventEmitted($event: { event: string; value: any }): void {
    // console.log("eventEmitted!");
    switch ($event.event) {
      case 'onCheckboxSelect':
        // console.log("onCheckboxSelect!");
        if (this.selected.has($event.value.rowId)) {
          this.selected.delete($event.value.rowId);
        } else {
          this.selected.add($event.value.rowId);
        }
        // console.log("this.selected: "+this.selected);
        // for(const item of this.selected){
        //     console.log("this.selected: "+item);
        //     console.log("=============");
        // }
        break;
      case 'onSelectAll':
        // console.log("onSelectAll!");
        this.data.forEach((_: any, key: number) => {
          if (this.selected.has(key)) {
            this.selected.delete(key);
          } else {
            this.selected.add(key);
          }
        //   console.log("this.selected: "+this.selected);
        //   for(const item of this.selected){
        //       console.log("this.selected: "+item);
        //       console.log("=============");
        //   }
        });
        break;
    }
  }

  eventEmittedTrashCan($event: { event: string; value: any }): void {
    // console.log("eventEmittedTrashCan!");
    switch ($event.event) {
      case 'onCheckboxSelect':
        if (this.selectedTrashCan.has($event.value.rowId)) {
          this.selectedTrashCan.delete($event.value.rowId);
        } else {
          this.selectedTrashCan.add($event.value.rowId);
        }
        break;
      case 'onSelectAll':
        this.data.forEach((_: any, key: number) => {
          if (this.selectedTrashCan.has(key)) {
            this.selectedTrashCan.delete(key);
          } else {
            this.selectedTrashCan.add(key);
          }
        });
        break;
    }
  }

  myFunc(){
    console.log("function called");
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
            
            this.searchAll();
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
  // ファイルをダウンロード
  download(rowIndex: number): void {
      let saveName = this.data[rowIndex].saveName;
      let name = this.data[rowIndex].name;
      
      this.paramDownload.append('userName',saveName.substring(14));
      this.paramDownload.append('name',name);
      // ファイルをダウンロード
      axios.post('http://localhost:8000/download',this.paramDownload,
          {
              responseType: 'blob', // apiからダウンロードしたファイルをBlobとして受け入れる
          }
          )
              .then(response=>{
                  const url = window.URL.createObjectURL(new Blob([response.data],
                      { type: 'application/octet-stream' }));//　octet-streamはファイル形式を指定しない場合に使う
                  const link = document.createElement('a');
                  link.href = url;
                  let fileNameFull = name
                  link.setAttribute('download', fileNameFull);
                  document.body.appendChild(link);
                  link.click();
              })

  };
  // 複数ファイルをダウンロード
  multipleDownload(){
      // ダウンロードに必要なデータを用意
      this.paramMultipleDownload = new FormData();
      
      for(const item of this.selected){
        this.paramMultipleDownload.append('userNameList',this.data[item].saveName.substring(14));
        this.paramMultipleDownload.append('nameList',this.data[item].name);
      }

    //   this.selected.forEach(item => {   
    //       this.paramMultipleDownload.append('userNameList',item.saveName.substring(14));
    //       this.paramMultipleDownload.append('nameList',item.name);
    //   });
      
      axios.post('http://localhost:8000/multipleDownload',this.paramMultipleDownload,
          {
              responseType: 'blob', // apiからダウンロードしたファイルをBlobとして受け入れる
          }
          )
              .then(response=>{
                  // ファイルをURLとして生成
                  const url = window.URL.createObjectURL(new Blob([response.data],
                      { type: 'application/octet-stream' }));//　octet-streamはファイル形式を指定しない場合に使う
                  // ダウンロード用のリンクを生成
                  const link = document.createElement('a');
                  // リンク先は当ファイルと設定
                  link.href = url;
                  // 'download'は当リンクの内容をダウンロード
                  link.setAttribute('download', 'download.zip');
                  // 当リンクを画面に追加
                  document.body.appendChild(link);
                  // 当リンクをクリックし、ダウンロードを行う
                  link.click();
              })

  };

  // ファイルサイズの単位を変換する
  fileSizeUnit(size: number){
      if(size <= 1000)
          return Math.round(size)+"B"
      else if(size <= 1000000)
          return Math.round(size/1000)+"KB"
      else if(size <= 1000000000)
          return Math.round(size/1000000)+"MB"
      else
          return Math.round(size/1000000000)+"TB"
  };
  // ファイルを削除
  deleteFile(rowIndex: number){
    //   let pathStr = path.toString()
      let pathStr = this.data[rowIndex].fileNo.toString()
      
      // ファイルをダウンロード
      axios.post('http://localhost:8000/delete',
          {pathStr: pathStr},// ファイルパスを送る
          )
          .then(response=>{
              this.searchAll();
              this.searchAllTrashCan();
          })
  };
  // ファイルを永久削除
  cancelDeleteFile(rowIndex:number){
      let pathStr = this.dataTrashCan[rowIndex].fileNo.toString();
      console.log("pathStr: "+pathStr)
      
      // ファイルをダウンロード
      axios.post('http://localhost:8000/cancelDelete',
          {pathStr: pathStr},// ファイルパスを送る
          )
          .then(response=>{
              this.searchAll();
              this.searchAllTrashCan();
          })
  };
  // ファイルを永久削除
  deleteFilePermanently(rowIndex:number){
      let pathStr = this.dataTrashCan[rowIndex].fileNo.toString();
      
      // ファイルをダウンロード
      axios.post('http://localhost:8000/deletePermanently',
          {pathStr: pathStr},// ファイルパスを送る
          )
          .then(response=>{
              this.searchAll();
              this.searchAllTrashCan();
          })
  };
  // データベースにある資料を検索
  searchAll(){
      // 最初にデータベースにある資料を検索
      axios.post('http://localhost:8000/searchAll')
          .then(response=>{
              console.log("response.data.code: "+response.data.code)
              // 検索結果を更新
              this.data = []
              let counter = 0;
              response.data.resultReturn.forEach((item: any[]) => {
                  let itemSet = {"id": counter+1, "fileNo": item[0], "saveName": item[8], "name": item[1], "size": this.fileSizeUnit(item[2]), "date": item[3]+"/"+item[4]+"/"+item[5], "format": item[6], "path": item[7]}
                  this.data.push(itemSet);
                  counter++;
                  console.log("this.data[0].saveName"+this.data[0].saveName)
              });
          })
  };
  // データベースにある資料を検索（削除したデータ）
  searchAllTrashCan(){
      // 最初にデータベースにある資料を検索
      axios.post('http://localhost:8000/searchAllTrashCan')
          .then(response=>{
            console.log("response.data.code: "+response.data.code)
            // 検索結果を更新
            this.dataTrashCan = []
            let counter = 0;
            response.data.resultReturn.forEach((item: any[]) => {
                let itemSet = {"id": counter+1, "fileNo": item[0], "saveName": item[8], "name": item[1], "size": this.fileSizeUnit(item[2]), "date": item[3]+"/"+item[4]+"/"+item[5], "format": item[6], "path": item[7]}
                this.dataTrashCan.push(itemSet);
                counter++;
                // console.log("this.data[0].saveName"+this.dataTrashCan[0].saveName)
            });
          })
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
