import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { GridComponent, GridColumn, DataAdapter, Smart, GridRow } from 'smart-webcomponents-angular/grid';
import { GetData } from '../../common/data';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	  styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {	

  @ViewChild("grid", { read: GridComponent, static: false }) grid: GridComponent;

  

    dataSource = new Smart.DataAdapter({
        dataSource: GetData(1000),
        dataFields: [
            'id: number',
            'firstName: string',
            'lastName: string',
            'productName: string',
            'available: bool',
            'quantity: number',
            'price: number',
            'total: number'
        ]
    })
    
    columns = [
        { label: 'Id', dataField: 'id', minWidth: '10', allowEdit: false},
        { label: 'First Name', dataField: 'firstName'},
     
    ]
    // onRowInitCallback = function (index: number, row: GridRow): void {
    //   console.log(row, index )
    // }
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		
    // init code.
    setTimeout(() => {
      let addNewRowEl = document.querySelectorAll('smart-grid-cell[addnewrow]');

      addNewRowEl[0].innerHTML = "<span class='newTextClass'> Another text for add row </span>";
    }, 100);
  
    
    this.grid.onRowInit = function (index: number, row: GridRow): void {
      // console.log(row, index);
    }

    this.grid.onRowInserted = function(index: number, newRow: GridRow):void  {
      // The following method handler is not a valid callback because is not a function 
      // console.log('Row inserted');
  
    };

    this.grid.onRowUpdate = function(index: number, row: GridRow, oldValues: any[], values: any[], confirm: (commit: boolean) => void) {
      // console.log('Row update');
    }

    this.grid.onRowRemoved = function(index: number, row: GridRow):void  {
      console.log('Row removed');
    }

    this.grid.onRowUpdated = function(index: number, row: GridRow):void {
      console.log('Row updated');
    }


    this.grid.sorting.enabled = true;
    this.grid.filtering.enabled = true;
    this.grid.selection.enabled = false;
    this.grid.editing.enabled = true;
    this.grid.editing.action = 'click';
    this.grid.editing.addDialog.enabled = true;
    this.grid.editing.addNewRow = {
      visible: true,
      position: 'far'
    };
    this.grid.editing.mode = 'row';
    this.grid.editing.commandColumn = {
      visible: true,
      displayMode: 'icon',
      dataSource: {
        'commandColumnDelete': { visible: true }
      }
    }

    this.grid.paging.enabled = true;
    this.grid.paging.pageSize = 10;
    this.grid.pager.visible = true;
    this.grid.behavior.columnResizeMode = 'growAndShrink';
	}	
}