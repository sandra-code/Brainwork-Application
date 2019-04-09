import { Component, OnInit, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
username:string;
}

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})

export class GroupsComponent {

  username: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(addMemberDialog, {
      width: '250px',
      data: { username: this.username }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.username = result;
    });
  }


}

  @Component({
    selector: 'app-groups',
    templateUrl: './addMemberDialog.html',
  })
 

  export class addMemberDialog{
  constructor(
    public dialogRef: MatDialogRef<addMemberDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
