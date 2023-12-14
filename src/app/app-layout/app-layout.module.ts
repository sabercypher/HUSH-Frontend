import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppLayoutComponent, ToolbarComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule],
})
export class AppLayoutModule {}
