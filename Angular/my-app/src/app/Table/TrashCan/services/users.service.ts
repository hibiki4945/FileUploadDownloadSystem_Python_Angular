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
    searchAll(sorting: SortingInterface, searchValue: string): Observable<UserInterface[]> {
        // const url = `http://127.0.0.1:8000/users\?_sort=${sorting.column}&_order=${sorting.order}&name_like=${searchValue}`;
        const url = `http://127.0.0.1:8000/searchAll`;
        return this.httpClient.get<UserInterface[]>(url);
    }

    searchAllTrashCan(sorting: SortingInterface, searchValue: string): Observable<UserInterface[]> {
        // const url = `http://127.0.0.1:8000/users\?_sort=${sorting.column}&_order=${sorting.order}&name_like=${searchValue}`;
        const url = `http://127.0.0.1:8000/searchAllTrashCan`;
        return this.httpClient.get<UserInterface[]>(url);
    }

    
    // download(fileNo: number) {
    //     const url = `http://127.0.0.1:8000/download\?fileNo=${fileNo}`;
    //     // const url = `http://127.0.0.1:8000/download`;
    //     return this.httpClient.post(url, {},
    //         { 
    //         headers: new HttpHeaders({'Content-Type': 'octet/stream',
    //                                     'Accept': 'octet/stream'}),
    //         responseType: 'arraybuffer'
    //         }
    //     );
    // }

    cancelDelete(fileNo: number){
        const url = `http://127.0.0.1:8000/cancelDelete\?fileNo=${fileNo}`;
        // const url = `http://127.0.0.1:8000/download`;
        return this.httpClient.post(url, {});
    };

    deletePermanently(fileNo: number){
        const url = `http://127.0.0.1:8000/deletePermanently\?fileNo=${fileNo}`;
        // const url = `http://127.0.0.1:8000/download`;
        return this.httpClient.post(url, {});
    };

}