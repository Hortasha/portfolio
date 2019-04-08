import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specific-project',
  templateUrl: './specific-project.component.html',
  styleUrls: ['./specific-project.component.scss']
})
export class SpecificProjectComponent implements OnInit {
  project: any;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = this.projectService.getProject(id);
  }

}
