export const SPINNER_HELPERS: any = {

	tsSourceProgressSpinner: `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
	showProgressBarCode;
	showSource;
		color = 'primary';
	  	mode = 'determinate';
	  	value = 50;

}
`.trim(),

	htmlSourceProgressSpinner: `
<mat-card>
					  	<mat-card-content>
					    	<h2 class="example-h2">Progress spinner configuration</h2>

					    	<section class="example-section">
					      		<label class="example-margin">Color:</label>
					      		<mat-radio-group [(ngModel)]="color">
					        		<mat-radio-button class="example-margin" value="primary">
					          		Primary
					        		</mat-radio-button>
					        		<mat-radio-button class="example-margin" value="accent">
					          		Accent
					        		</mat-radio-button>
					       			<mat-radio-button class="example-margin" value="warn">
					          		Warn
					        		</mat-radio-button>
					     		</mat-radio-group>
					    	</section>

						    <section class="example-section">
						      <label class="example-margin">Mode:</label>
						      <mat-radio-group [(ngModel)]="mode">
						        <mat-radio-button class="example-margin" value="determinate">
						          Determinate
						        </mat-radio-button>
						        <mat-radio-button class="example-margin" value="indeterminate">
						          Indeterminate
						        </mat-radio-button>
						      </mat-radio-group>
						    </section>

						    <section class="example-section" *ngIf="mode == 'determinate'">
						      <label class="example-margin">Progress:</label>
						      <mat-slider class="example-margin" [(ngModel)]="value"></mat-slider>
						    </section>
					  	</mat-card-content>
					</mat-card>
					<mat-card>
					  <mat-card-content>
					    <h2 class="example-h2">Result</h2>

					    <mat-progress-spinner
					        class="example-margin"
					        [color]="color"
					        [mode]="mode"
					        [value]="value">
					    </mat-progress-spinner>
					  </mat-card-content>
					</mat-card>
					`.trim(),
};