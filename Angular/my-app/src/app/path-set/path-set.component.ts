import { Component, OnInit } from '@angular/core';
// axiosでapiと接続
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-path-set',
  standalone: true,
  imports: [
    // CommonModule,
    FormsModule,],
  templateUrl: './path-set.component.html',
  styleUrl: './path-set.component.css'
})
export class PathSetComponent implements OnInit {
  // ファイルパス
  filePath = "";
  // ファイルパス（更新）
  filePathNew = "";
  
  // ダウンロードに必要なデータ
  paramFilePath = new FormData();

  ngOnInit() {
    console.log("ngOnInit()!");
    this.searchFilePath();
  }
  
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
