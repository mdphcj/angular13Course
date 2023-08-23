import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  courses = [
    {
      id: 101,
      name: 'course name',
      author: 'author name',
      duration: 48,
      type: 'Free',
      price: 0.0,
      ratings: 3.5,
      image: 'assets/course-image.jpeg',
      description:
        'course description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor eget dolor morbi non. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Donec ultrices tincidunt arcu non sodales neque sodales. Mi bibendum neque egestas congue quisque',
    },
    {
      id: 102,
      name: 'course name',
      author: 'author name',
      duration: 48,
      type: 'Free',
      price: 0.0,
      ratings: 3.5,
      image: 'assets/course-image.jpeg',
      description:
        'course description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor eget dolor morbi non. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Donec ultrices tincidunt arcu non sodales neque sodales. Mi bibendum neque egestas congue quisque',
    },
    {
      id: 103,
      name: 'course name',
      author: 'author name',
      duration: 48,
      type: 'Free',
      price: 0.0,
      ratings: 3.5,
      image: 'assets/course-image.jpeg',
      description:
        'course description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor eget dolor morbi non. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Donec ultrices tincidunt arcu non sodales neque sodales. Mi bibendum neque egestas congue quisque',
    },
    {
      id: 104,
      name: 'course name',
      author: 'author name',
      duration: 48,
      type: 'Free',
      price: 0.0,
      ratings: 3.5,
      image: 'assets/course-image.jpeg',
      description:
        'course description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor eget dolor morbi non. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Donec ultrices tincidunt arcu non sodales neque sodales. Mi bibendum neque egestas congue quisque',
    },
    {
      id: 105,
      name: 'course name',
      author: 'author name',
      duration: 48,
      type: 'Free',
      price: 0.0,
      ratings: 3.5,
      image: 'assets/course-image.jpeg',
      description:
        'course description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor eget dolor morbi non. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Donec ultrices tincidunt arcu non sodales neque sodales. Mi bibendum neque egestas congue quisque',
    },
    {
      id: 106,
      name: 'course name',
      author: 'author name',
      duration: 48,
      type: 'Free',
      price: 0.0,
      ratings: 3.5,
      image: 'assets/course-image.jpeg',
      description:
        'course description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor eget dolor morbi non. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Donec ultrices tincidunt arcu non sodales neque sodales. Mi bibendum neque egestas congue quisque',
    },
    {
      id: 107,
      name: 'course name',
      author: 'author name',
      duration: 48,
      type: 'Premium',
      price: 0.0,
      ratings: 3.5,
      image: 'assets/course-image.jpeg',
      description:
        'course description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor eget dolor morbi non. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Donec ultrices tincidunt arcu non sodales neque sodales. Mi bibendum neque egestas congue quisque',
    },
    {
      id: 108,
      name: 'course name',
      author: 'author name',
      duration: 48,
      type: 'Free',
      price: 0.0,
      ratings: 3.5,
      image: 'assets/course-image.jpeg',
      description:
        'course description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor eget dolor morbi non. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Donec ultrices tincidunt arcu non sodales neque sodales. Mi bibendum neque egestas congue quisque',
    },
    {
      id: 109,
      name: 'course name',
      author: 'author name',
      duration: 48,
      type: 'Premium',
      price: 0.0,
      ratings: 3.5,
      image: 'assets/course-image.jpeg',
      description:
        'course description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor eget dolor morbi non. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Donec ultrices tincidunt arcu non sodales neque sodales. Mi bibendum neque egestas congue quisque',
    },
  ];
  getTotalCourses() {
    return this.courses.length;
  }
  getTotalFreeCourses() {
    return this.courses.filter((course) => course.type === 'Free').length;
  }
  getTotalPremiumCourses() {
    return this.courses.filter((course) => course.type === 'Premium').length;
  }
  
  courseCountRadioButton: string = 'All';
  searchText: string = "";

  onFilterRadioButtonChanged(data: string) {
    this.courseCountRadioButton = data;
  }

  onSearchTextChanged(textToSearch: string){
    this.searchText = textToSearch;
    console.log(this.searchText);
    
  }
}
