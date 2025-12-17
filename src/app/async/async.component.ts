import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrl: './async.component.css'
})
export class AsyncComponent {
  message: any;
  scores: any;
   testObservable = new Observable((observer)=>{
    setTimeout(()=>{observer.next("Hello world!")},1000);
    setTimeout(()=>{observer.next("Mom Says Hello!")},2000);
    setTimeout(()=>{observer.next("Dad Says Hello !")},3000);
    setTimeout(()=>{observer.next("Sister Says Hello!")},4000);
    setTimeout(()=>{observer.next("Brother Says Hello!")},5000);
    setTimeout(()=>{observer.next("Aunt Says Hello!")},6000);
   });

   testObservable2 = new Observable((observer)=>{
    // setTimeout(()=>{observer.next("Hello world!")},1000);
    // setTimeout(()=>{observer.next("Mom Says Hello!")},2000);
    // setTimeout(()=>{observer.next("Dad Says Hello !")},3000);
    // setTimeout(()=>{observer.next("Sister Says Hello!")},4000);
    // setTimeout(()=>{observer.next("Brother Says Hello!")},5000);
    // setTimeout(()=>{observer.next("Aunt Says Hello!")},6000);
    observer.next([20,23,24,25,26,27,99,78]);
   });

   testObservable3= new Observable((observer)=>{
     throw new Error("cannot proceed");
   })

   publish(): any{
    // this.testObservable.subscribe(callback function);
        // this.testObservable.subscribe(function myfun(){});
    this.testObservable.subscribe((data)=>{

      console.log(data);
      this.message=data;
    });
   }


   publish2(): any{
      this.testObservable.subscribe((p)=>{
        console.log(p);
      })
      this.testObservable2.subscribe((scores)=>{
        this.scores=scores;
      })
   }

   publish3(): any{
     this.testObservable3.subscribe({

       next: (scores) =>{ console.log("got data response")},
       error: (err) => {console.log('got error response: ',err)}
     })
   }
  
}
