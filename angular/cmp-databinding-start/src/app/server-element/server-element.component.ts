import { 
	Component,
	OnInit, 
	Input,
	ViewEncapsulation,
	OnChanges,
	SimpleChanges,
	DoCheck, 		 
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	OnDestroy
} from '@angular/core';

@Component({
	selector: 'app-server-element',
	templateUrl: './server-element.component.html',
	styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges,
 DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterContentChecked,
 OnDestroy {

	@Input("srvElement") element:{type: string, name: string, content:string};
	@Input() name: string;
	
	constructor() { 
		console.log('constructor called!')
	 }
 
	ngOnChanges(changes: SimpleChanges) {
		console.log('Ng On Changes called', changes);
	}

	ngOnInit() {
		console.log('ngOnInit called!');
	}

	ngDoCheck() {
		console.log('ngDoCheck');
	}

	
	ngAfterContentInit(){
		console.log('ngAfterContentInit');
	}
	
	ngAfterContentChecked(){
		console.log('ngAfterContentChecked');
	}

	ngAfterViewInit(){
		console.log('NG after View');
	}
	
	ngAfterViewChecked(){
		console.log('NG after checked');
	}

	ngOnDestroy(){
		console.log("destroyy");
		
	}

}
