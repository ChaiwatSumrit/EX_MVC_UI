import { Component } from '@angular/core';
import { Service } from './service/service';
import { TransactionSumNumberAB } from './model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  modelAB : TransactionSumNumberAB = TransactionSumNumberAB.empty();

  public title = 'my-app';
  public timeServer: any;
  public randomNumber: any;
  public sumAB: any;
  public TransactionSumNumberAB: any;

  constructor(
    private Service: Service
  ) { }

  ngOnInit() {
    this.modelAB = TransactionSumNumberAB.sampleSubmitSr();
  }

  onSubmitGetTime() {
    //   this.timeServer = this.getServerTime()
    //   console.log('timeServer : ' +  this.timeServer);
    // document.getElementById('timeServer').innerHTML = this.timeServer;

    this.Service.submitGetTime()
      .subscribe(
        Result => {
          console.log('submitGetTime Success ');
          console.log('reply:' + Result.TIME);

          this.timeServer = Result.TIME
          console.log('timeServer : ' + this.timeServer);
          // document.getElementById('timeServer').innerHTML = this.timeServer;
        },
        error => {

          // let header = 'Error';
          // this.progressDialog.close();
          let message = error;
          // (<HTMLInputElement>document.getElementById('status')).value = message;
          console.log('Error :' + message);
          // document.getElementById("statusfield").style.display = "block";
        });
  }

  onSubmitRandomnNumber() {
    // let N = 101;
    // returns a random integer from 0 to N
    // this.randomNumber = Math.floor(Math.random() * N);
    // console.log('randomNumber : ' + this.randomNumber);
    // document.getElementById('randomNumber').innerHTML = this.randomNumber;

    this.Service.submitRandomNumber()
      .subscribe(
        (Result) => {
          console.log('submitRandomNumber Success ');
          console.log('reply:' + Result.RANDOM);
          this.randomNumber = Result.RANDOM
          console.log('timeServer : ' + this.randomNumber);
          // document.getElementById('timeServer').innerHTML = this.timeServer;
        },
        (error) => {
          // let header = 'Error';
          // this.progressDialog.close();
          let message = error;
          // (<HTMLInputElement>document.getElementById('status')).value = message;
          console.log('Error :' + message);
          // document.getElementById("statusfield").style.display = "block";

        });
  }


  onSubmitSumAB() {
    
    console.log("A : "+this.modelAB.numberA);
    console.log("B : "+this.modelAB.numberB);
    this.modelAB.numberA = Number(this.modelAB.numberA)
    this.modelAB.numberB = Number(this.modelAB.numberB)
    this.Service.submitSumAB(this.modelAB)
      .subscribe(
        (Result) => {
          console.log('onSubmitSumAB Success ');
          console.log('reply:' + Result.SUM);
          this.sumAB = Result.SUM
          console.log('timeServer : ' + this.sumAB);
          // document.getElementById('timeServer').innerHTML = this.timeServer;
        },
        (error) => {
          // let header = 'Error';
          // this.progressDialog.close();
          let message = error;
          // (<HTMLInputElement>document.getElementById('status')).value = message;
          console.log('Error :' + message);
          // document.getElementById("statusfield").style.display = "block";

        });

  }

  // getServerTime() {
  //   var offset = 0;
  //   var date = new Date();

  //   date.setTime(date.getTime() + offset);

  //   return date;
  // }

}
