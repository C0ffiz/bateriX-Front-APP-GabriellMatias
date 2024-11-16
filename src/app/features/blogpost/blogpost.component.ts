import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blogpost',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './blogpost.component.html'
})
export class BlogPostComponent implements OnInit {
  post: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    let token = '';

    if (typeof window !== 'undefined') {
      token = localStorage.getItem('authToken') || ''; // Provide a default value if null
    }

    console.log('Token:', token); // Debugging

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Include the token in the headers
    });

    this.http.get(`http://localhost:3333/posts/${postId}`, { headers }).subscribe(
      (data) => {
        this.post = data;
      },
      (error) => {
        console.error('Error fetching post:', error);
        if (error.status === 0) {
          console.error('Connection refused. Please ensure the backend server is running.');
        }
      }
    );
  }
}
