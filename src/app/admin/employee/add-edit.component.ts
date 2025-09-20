import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { EmployeeService, AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'add-edit.component.html' })
export class AddEditComponent implements OnInit {
    form!: FormGroup;
    id?: string;
    title!: string;
    loading = false;
    submitting = false;
    submitted = false;

    accounts: any[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private employeeService: EmployeeService,
        private accountService: AccountService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.title = this.id ? 'Edit Employee' : 'Create Employee';
        this.initForm();

        // load accounts for dropdown
        this.accountService.getAll()
            .pipe(first())
            .subscribe(accs => this.accounts = accs);

        if (this.id) {
            this.loading = true;
            this.employeeService.getById(this.id)
                .pipe(first())
                .subscribe({
                    next: (emp) => {
                        this.form.patchValue(emp);
                        this.loading = false;
                    },
                    error: () => this.loading = false
                });
        }
    }

    private initForm() {
        this.form = this.formBuilder.group({
            employeeId: [''],
            position: ['', Validators.required],
            department: [''],
            hireDate: [''],
            status: ['Active', Validators.required],
            accountId: [''] // link to account
        });
    }

    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;
        this.alertService.clear();

        if (this.form.invalid) return;

        this.submitting = true;
        const payload = { ...this.form.value };

        let request$;
        if (this.id) {
            request$ = this.employeeService.update(this.id, payload);
        } else {
            request$ = this.employeeService.create(payload);
        }

        request$
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Employee saved', { keepAfterRouteChange: true });
                    this.router.navigateByUrl('/admin/employees');
                },
                error: (err) => {
                    this.alertService.error(err);
                    this.submitting = false;
                }
            });
    }
}
