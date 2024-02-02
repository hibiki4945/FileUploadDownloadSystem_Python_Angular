import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
// axiosでapiと接続
// import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule } from '@angular/forms';
import axios from 'axios';
// import { PathService } from './services/path.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-path-set',
  standalone: true,
  imports: [
    // CommonModule,
    FormsModule,
    // PathService
  ],
  templateUrl: './path-set.component.html',
  styleUrl: './path-set.component.css'
})
export class PathSetComponent {
  // ファイルパス
  filePath = "";
  // ファイルパス（更新）
  filePathNew = "";
  
  // ダウンロードに必要なデータ
  paramFilePath = new FormData();

  // constructor(private pathService: PathService, private fb: FormBuilder,private fm: FormsModule, private changeDetector: ChangeDetectorRef) {}
 
  constructor(private httpClient: HttpClient, private changeDetector: ChangeDetectorRef) {}


  // ngChanges() {
  //   console.log("ngChanges()!");
  //   this.searchFilePath();
  //   console.log("this.filePath: "+this.filePath)
  // }

  ngOnInit() {
    console.log("ngOnInit()!");
    this.searchFilePath();
    console.log("this.filePath: "+this.filePath)
  }

  // ngDoCheck() {
  //   console.log("ngDoCheck()!");
  //   this.searchFilePath();
  //   console.log("this.filePath: "+this.filePath)
  // }
  
  // Observable = シンクロ化
  searchFilePathFetch(): Observable<string> {
    // const url = `http://127.0.0.1:8000/users\?_sort=${sorting.column}&_order=${sorting.order}&name_like=${searchValue}`;
    const url = `http://127.0.0.1:8000/searchFilePath`;
    return this.httpClient.post<string>(url, {});
  }

  // ファイルパスを探す
  searchFilePath(){
    this.searchFilePathFetch().subscribe(users => {
      this.filePath = users
      this.changeDetector.markForCheck();
    });
  };
  // 保存フォルダーを更新
  filePathUpdate(){
    // パスの入力かをチェック
    if(this.filePathNew.length === 0){
        alert("パスを入力してください")
        return
    }

    this.paramFilePath.append('path',this.filePathNew);
    axios.post('http://localhost:8000/updateFilePath',this.paramFilePath)
        .then(response=>{
            // console.log("filePathUpdate!")
            if(response.data.code === "200"){
                // console.log("200")
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
