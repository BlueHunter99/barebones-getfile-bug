import { Component } from "@angular/core";
import {File, Http, isAndroid, isIOS, knownFolders, path, Utils } from "@nativescript/core";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent {
    downloadFile(): void {
        let filePath: string = path.join(
            knownFolders.documents().path,
            "testfile.pdf"
        );

        Http.getFile("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", filePath).then(
            (file: File) => {
                Utils.openFile(file.path);
            },
            (e) => {
                console.log(e);
            }
        );
    }
}
