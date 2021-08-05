import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class MyLibComponent implements OnInit {
    private httpClient;
    searchedText: string;
    BASE_URL: string;
    timer: any;
    searchResponse: any;
    isLoading: boolean;
    constructor(httpClient: HttpClient);
    ngOnInit(): void;
    /**
    * Function Execute when user type something in text input after timeout of 500
    */
    onInputChange(): void;
    /**
     * Function that fetch records from server and modify that for highlight searched word
     */
    makeAPICall(): void;
    /**
     * function for navigate to given external url
     * @param url string navigation url
     */
    navigateToLink(url: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MyLibComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyLibComponent, "my-angular-search", never, {}, {}, never, never>;
}
