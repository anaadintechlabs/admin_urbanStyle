import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReturnsService } from '../service/returns.service';

@Component({
  selector: 'app-returnss-profile',
  templateUrl: './returnss-profile.component.html',
  styleUrls: ['./returnss-profile.component.css']
})
export class ReturnssProfileComponent implements OnInit {
  public returnId: number;
  public returnData: any;

  constructor(private route: ActivatedRoute,
    private returnsService: ReturnsService,
    private router: Router ) { }

  ngOnInit() {
    this.route.url.subscribe(
      params => {
        this.returnId = this.route.snapshot.params.id;
        console.log(this.returnId);

        let url = 'api/getAllDetailOfReturn';
        this.returnsService.getAllDetailOfReturn(url, {returnId: this.returnId}).subscribe(
          data => {
            this.returnData = data.data.returnDetails;
            console.log(this.returnData);
          }, error => {
            console.log(error);
          }
        )
      }, error => {
        console.log(error);
      }
    )
  }


  recieveReturn() {
    let url = 'api/setReturnStatusbyAdmin';
    this.returnsService.setReturnStatusbyAdmin(url, {}, 
      {returnId: this.returnId, status: 'RECIEVED'}).subscribe(
        data => {
          this.router.navigateByUrl('/returns');
        }, error => {
          console.log(error);
        }
      );
  }

}
