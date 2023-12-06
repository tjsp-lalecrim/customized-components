import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills-bar',
  templateUrl: './skills-bar.component.html',
  styleUrls: ['./skills-bar.component.scss']
})
export class SkillsBarComponent {

  @Input() items: Item[] = [];

}

interface Item {
  name: string,
  percent: number
}
