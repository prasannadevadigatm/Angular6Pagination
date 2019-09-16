import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
	@Input() pageCount;
	@Input() currentPage;
    @Output() onClick: EventEmitter<any> = new EventEmitter();
    page: any = {};

  	constructor() { }

	ngOnInit() {
	}
    lowerLimit(){
        let low = this.currentPage - (Math.ceil(5/2) - 1);
        return Math.max(low, 0);
    }
    isNotFirstPage(){
        return this.currentPage !== 0
    }
    isNotLastPage(){
        return this.currentPage !== this.pageCount - 1
    }
    setFirstPage(){
        this.currentPage = 0;
        this.onClick.emit(this.currentPage);
    }
    setPrevPage(){
        this.currentPage -= 1;
        this.onClick.emit(this.currentPage);
    }
    setPage = function(page){
        this.currentPage = page;
        this.onClick.emit(this.currentPage);
    }
    setNextPage(){
        this.currentPage += 1;
        this.onClick.emit(this.currentPage);
    }
    setLastPage(){
        this.currentPage = this.pageCount - 1;
        this.onClick.emit(this.currentPage);
    }
    goto(pageNum){
        if(isNaN(pageNum)){
            this.page = {};
            
            alert('Please Enter Valid Page Number.Page Number Should be within 1 to '+ this.pageCount);
        }else{
            if(Number(pageNum) >= 1 && Number(pageNum) <= this.pageCount){
                this.setPage(Number(pageNum) - 1);
            }else{
                this.page = {};
                
                alert('Page Number Should be within 1 to '+ this.pageCount);
            }
        }
    }

}
