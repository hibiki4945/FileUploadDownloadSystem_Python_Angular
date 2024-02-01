import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/users.service";
import { UserInterface } from "../../types/user.interface";
import { SortingInterface } from "../../types/sorting.interface";
import { FormBuilder } from "@angular/forms";
// import { BehaviorSubject } from "rxjs";
// import { TrashCanTableModule } from '../../../TrashCan/usersTable.module';

@Component({
    selector: 'data-table', // <users-table></users-table>で当コンポーネントを使う
    // selector: 'users-table', // <users-table></users-table>で当コンポーネントを使う
    // standalone: true,
    // imports: [TrashCanTableModule],
    templateUrl: './usersTable.component.html',
    styleUrls: ['./usersTable.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersTableComponent implements OnInit {
    
    // messageArray: BehaviorSubject<Array<any>>;

    // constructor(private changeDetector: ChangeDetectorRef) {
    //     this.messageArray = new BehaviorSubject<Array<any>>([{message: "test message 1", style: "answer"}]);
    // }

    users: UserInterface[] = [];
    // users: BehaviorSubject<UserInterface[]>;
    usersTemp: UserInterface = {
        FILE_NO: 0,
        FILE_NAME: "",
        FILE_SIZE: 0,
        UPDATE_YEAR: "",
        UPDATE_MONTH: "",
        UPDATE_DAY: "",
        FILE_FORMAT: "",
        FILE_PATH: "",
        SAVE_NAME: "",
        DEL_FLG: 0,
    }
    // columns: Array<keyof UserInterface> = ["FILE_NO", "FILE_NAME", "FILE_SIZE", "UPDATE_YEAR", "UPDATE_MONTH", "UPDATE_DAY", "FILE_FORMAT", "FILE_PATH", "SAVE_NAME", "DEL_FLG"];
    // columns: Array<keyof UserInterface> = ["FILE_NAME", "FILE_SIZE", "UPDATE_YEAR", "UPDATE_MONTH", "UPDATE_DAY", "FILE_FORMAT", "FILE_PATH", "SAVE_NAME", "DEL_FLG"];
    sorting: SortingInterface = {
        column: 'FILE_NO',
        order: 'asc',
    };
    searchValue: string = '';
    searchForm = this.fb.nonNullable.group({
        searchValue: '',
    });

    constructor(private usersService: UsersService, private fb: FormBuilder, private changeDetector: ChangeDetectorRef) {}
    // constructor(private usersService: UsersService, private fb: FormBuilder, private changeDetector: ChangeDetectorRef) {
    //     this.users = new BehaviorSubject<UserInterface[]>([]);
    // }

    ngOnInit(): void {
        this.searchAll()
    }

    searchAll(): void {
        this.usersService.getUsers(this.sorting, this.searchValue).subscribe(users => {
            console.log("this.usersService.getUsers")
            // users: UserInterface[] = [];
            
            this.users = users
            // this.users = [...this.users]
            this.changeDetector.markForCheck();
            console.log(this.users)
        });
    }

    capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.substring(1)
    }

    isDescSorting(column: string): boolean {
        return this.sorting.column === column && this.sorting.order ==='desc'
    }

    isAscSorting(column: string): boolean {
        return this.sorting.column === column && this.sorting.order ==='asc'
    }

    sortTable(column: string): void{
        const futureSortingOrder = this.isDescSorting(column) ? 'asc' : 'desc';
        this.sorting = {
            column,
            order: futureSortingOrder,
        };
        // console.log(this.sorting);
        this.searchAll();
    }

    onSearchSubmit(): void {
        // console.log('searchValue', this.searchForm.value.searchValue);
        this.searchValue = this.searchForm.value.searchValue ?? '';
        this.searchAll();
    }

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
    }

    
    // ファイルをダウンロード
        download(fileNo: number, fileName: string): void {
            console.log("fileNo: "+fileNo)
    
            this.usersService.download(fileNo)
                .subscribe(users => {
                    const url = window.URL.createObjectURL(new Blob([users],
                        { type: 'application/octet-stream' }));//　octet-streamはファイル形式を指定しない場合に使う
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', fileName);
                    document.body.appendChild(link);
                    link.click();
            });
    
        };

        
        // ファイルを削除 
        deleteFile(fileNo: number){
            console.log("deleteFile01")
            this.usersService.delete(fileNo)
                .subscribe(users => {
                    console.log("deleteFile02")
                    this.searchAll()
                    console.log(this.users)
                    // this.searchAllTrashCan();
            });
            // console.log("deleteFile03")
            // this.searchAll()
            // console.log("deleteFile04")
        };

}