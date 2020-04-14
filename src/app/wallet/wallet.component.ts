import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { UserService } from "src/app/user/service/user.service";

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {


  public offset=0;
  public limit=15;
  public sortingDirection='DESC';
  public sortingField='createdDate'
  public walletDetails:any;
  public incomingTransactionList:any;
  public outgoingTransactionList:any;
  public count:any;
   public request = {
    "limit":this.limit,
    "offset":this.offset,
    "sortingDirection":this.sortingDirection,
    "sortingField":this.sortingField
  };


  constructor(public userService:UserService,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.getWalletDetailsOfUser();
  }


  getWalletDetailsOfUser()

  {
  
    this.userService.getWalletDetailsOfUser(this.request).subscribe(data=>{

      this.walletDetails=data.data.walletDetails;
      this.incomingTransactionList=data.data.incomingTransactions;
      this.outgoingTransactionList=data.data.outgoingTransactions;
      
      console.log("data us",data);
    },error=>{
      console.log("error",error);
    })
  }

   pageChanged(event){
    console.log("page changes"+event)
    this.request.offset=event-1;
    this.offset=event;
    this.getWalletDetailsOfUser();
  }
}
