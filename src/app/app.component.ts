import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AppService } from './app.servics';
import { FormField } from './form-field';
import { User } from './User.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-form';
  formData: any;
  form = new FormGroup({});
  formFields: FormField[] = [];
  public userArray: any;
  public userHeaders: any;

  ngOnInit() {
    this.httpClient.get('/assets/list.csv', { responseType: 'text' }).subscribe(file => {
      const lines = file.split('\n')
      const result = []
      const headers = lines[0].split(',')

      for (let i = 1; i < lines.length; i++) {
        if (!lines[i])
          continue
        const obj: any = new User();
        const currentline = lines[i].split(',')

        for (let j = 0; j < headers.length; j++) {
          obj[headers[j] as keyof typeof User] = currentline[j]
        }
        result.push(obj)
      }
      this.userArray = result
      this.userHeaders = headers

    });
  }

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<FormField[]>("/assets/form.json").subscribe((formFields: any) => {
      for (const formField of formFields.controls) {
        this.form.addControl(formField.name, new FormControl(''));
      }
      this.formData = formFields.controls;
    })
  }

  onSubmit(): void {
    if (this.form.valid) {
      let value = this.form.value;
      console.log(value)
    }
  }
}
