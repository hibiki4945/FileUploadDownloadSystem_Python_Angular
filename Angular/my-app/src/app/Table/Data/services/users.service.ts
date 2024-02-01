import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserInterface } from "../types/user.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SortingInterface } from "../types/sorting.interface";

@Injectable()
export class UsersService {
    // constructor = 注入
    constructor(private httpClient: HttpClient) {}

    // Observable = シンクロ化
    getUsers(sorting: SortingInterface, searchValue: string): Observable<UserInterface[]> {
        // const url = `http://127.0.0.1:8000/users\?_sort=${sorting.column}&_order=${sorting.order}&name_like=${searchValue}`;
        const url = `http://127.0.0.1:8000/searchAll`;
        return this.httpClient.get<UserInterface[]>(url);
    }

    
    download(fileNo: number) {
        const url = `http://127.0.0.1:8000/download\?fileNo=${fileNo}`;
        // const url = `http://127.0.0.1:8000/download`;
        return this.httpClient.post(url, {},
            { 
            headers: new HttpHeaders({'Content-Type': 'octet/stream',
                                        'Accept': 'octet/stream'}),
            responseType: 'arraybuffer'
            }
        );
    }

    // ファイルを削除 
    delete(fileNo: number){
        const url = `http://127.0.0.1:8000/delete\?fileNo=${fileNo}`;
        // const url = `http://127.0.0.1:8000/download`;
        return this.httpClient.post(url, {});
    };

    // multipleDownload(fileNoList: number[]){
    multipleDownload(fileNoList0: string[]) {
        const fileNoListStr = fileNoList0.toString()
        console.log(fileNoListStr)
        // const url = `http://127.0.0.1:8000/multipleDownload`;
        const url = `http://127.0.0.1:8000/multipleDownload\?fileNoListStr=${fileNoListStr}`;
        // const url = `http://127.0.0.1:8000/multipleDownload\?fileNoList=${[]}`;
        // const url = `http://127.0.0.1:8000/multipleDownload\?fileNoList=${[0, 1]}`;
        // const url = `http://127.0.0.1:8000/download`;
        // return this.httpClient.post(url, {fileNoList: fileNoList});
        // return this.httpClient.post(url, {fileNoList});
        // const body = { fileNoList };
        // const body = 0;
        
        // return this.httpClient.post(url, body);
        return this.httpClient.post(url, {},
            { 
            headers: new HttpHeaders({'Content-Type': 'octet/stream',
                                        'Accept': 'octet/stream'}),
            responseType: 'arraybuffer'
            });
        // return this.httpClient.get(url);
    };


}