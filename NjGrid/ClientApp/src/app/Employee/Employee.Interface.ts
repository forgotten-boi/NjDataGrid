export interface IEmployeeInterface {
    id: number,
    bankName: string,
    bank_AccountNo: string,
    ciT_AccountNo: string,
    contactPerson: string,
    dob: Date,
    departmentId: number,
    designationId: number,
    email: string,
    firstName: string,
    lastName: string,
    fullName: string,
    isActive: boolean,
    joiningDate: Date,
    lastDate: Date,
    martialStatusId: number,
    martialStatus: string,
    pF_AccountNo: string,
    permanentAddress: string,
    primaryMobileNo: string,
    secondaryMobileNo: string,
    sex: string,
    status: string,
    temporaryAddress: string,
    username: string,
    password: string,
    
    advanceAmount: number;
    advanceSalaryDate: Date;
    deducationFromDate: Date;
    deducationToDate: Date;
    deductionType: boolean;
    deductionTypeValue: string;
    noOfEMI: number;
    employeeComment: string;
    approverComment: string;
    amountDeducted: number;
    amountPending: number;
    isSelected: boolean;
    paNNumber: string;
    location: string;
    officeCode: string;
  roleId: number;
  employeeJoiningDate: Date;
}

export interface Role {
    roleName: string;
    roleId: number;
}
