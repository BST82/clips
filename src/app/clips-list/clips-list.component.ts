import { Component, OnInit, OnDestroy,Input } from '@angular/core';
import { ClipService } from '../services/clip.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-clips-list',
  templateUrl: './clips-list.component.html',
  styleUrl: './clips-list.component.css',
  providers:[DatePipe]
})

export class ClipsListComponent implements OnInit, OnDestroy {
  @Input() scrollable=true;

  constructor(public clipService:ClipService){
     this.clipService.getClips();
  }

  ngOnInit(): void {
    if(this.scrollable){
      window.addEventListener('scroll', this.handleScroll);
    }
    this.clipService.pageClips=[];
  
  }
  ngOnDestroy(): void {
    try {
      window.removeEventListener('scroll', this.handleScroll);
    } catch (error) {
      console.error('Error removing event listener:', error);
    }
  }
  
  handleScroll = () => {
    const { scrollTop, offsetHeight } = document.documentElement;
    const { innerHeight } = window;

    const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight ;

    if(bottomOfWindow){
     this.clipService.getClips();
      
    }
  }
}
