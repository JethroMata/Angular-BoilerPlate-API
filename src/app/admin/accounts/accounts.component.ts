//newly added file
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  //styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts = [
    { title: 'Mr', firstName: 'Admin', lastName: 'User', email: 'admin@example.com', role: 'Admin', status: 'Inactive' },
    { title: 'Ms', firstName: 'Normal', lastName: 'User', email: 'user@example.com', role: 'User', status: 'Active' },
    { title: 'Dr', firstName: 'Inactive', lastName: 'Person', email: 'inactive@example.com', role: 'User', status: 'Active' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddAccount(): void {
    // Logic for adding a new account, e.g., navigate to a new form
    console.log('Add Account button clicked');
  }

  onEditAccount(account: any): void {
    // Logic for editing the selected account
    console.log('Edit Account button clicked for:', account);
  }
}