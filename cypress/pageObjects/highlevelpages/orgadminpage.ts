class orgadminpage {

    menu: string;
    dashboard: string;
    projects: string;
    workload: string;
    dayplanner: string;
    videocall: string;
    teamscheduler: string;
    files: string;
    humanresource: string;
    employees: string;
    assets: string;
    assetallocation: string;
    dailyattendence: string;
    attendence: string;
    leaverequest: string;
    users: string;
    departments: string;
    latecoming: string;
    teams: string;
    suggestions: string;
    holidays: string;
    events: string;
    filehr: string;
    filecategory: string;
    finance: string;
    dashboardfinance: string;
    billablehours: string;
    createinvoice: string;
    invoices: string;
    income: string;
    providentfund: string;
    expense: string;
    salaries: string;
    loans: string;
    cashcategory: string;
    settings:string;
    trash: string;
    userrole: string;
    managemenus: string;
    assignrolebasedmenus: string;
    organizations: string;
    newuser: string;
    clients: string;
    projectsettings: string;

    constructor(){

        this.menu= '//button[@name="menuBtn"]'
        this.dashboard= '//div[@class="SidebarLabel" and contains(text(), "Dashboard")]'
        this.projects= '//div[@class="SidebarLabel" and contains(text(), "Projects")]'
        this.workload= '//div[@class="SidebarLabel" and contains(text(), "Workload")]'
        this.dayplanner= '//div[@class="SidebarLabel" and contains(text(), "Day Planner")]'
        this.videocall= '//div[@class="SidebarLabel" and contains(text(), "Video Call")]'
        this.teamscheduler= '//div[@class="SidebarLabel" and contains(text(), "Team Scheduler")]'
        this.files= '//div[@class="SidebarLabel" and contains(text(), "Files")]'

        this.humanresource= '//div[@class="SidebarLabel" and contains(text(), "Human Resource")]'
        this.employees= '//div[@class="SubnavLabel" and contains(text(), "Employees")]'
        this.assets= '//div[@class="SubnavLabel" and contains(text(), "Assets")]'
        this.assetallocation= '//div[@class="SubnavLabel" and contains(text(), "Assets Allocation")]'
        this.dailyattendence= '//div[@class="SubnavLabel" and contains(text(), "Daily Attendence")]'
        this.attendence= '//div[@class="SubnavLabel" and contains(text(), "Attendence")]'
        this.leaverequest= '//div[@class="SubnavLabel" and contains(text(), "Leave Request")]'
        this.users= '//div[@class="SubnavLabel" and contains(text(), "Users")]'
        this.departments= '//div[@class="SubnavLabel" and contains(text(), "Departments")]'
        this.latecoming= '//div[@class="SubnavLabel" and contains(text(), "Late Coming")]'
        this.teams= '//div[@class="SubnavLabel" and contains(text(), "Teams")]'
        this.suggestions= '//div[@class="SubnavLabel" and contains(text(), "Suggestions")]'
        this.holidays= '//div[@class="SubnavLabel" and contains(text(), "Holidays")]'
        this.events= '//div[@class="SubnavLabel" and contains(text(), "Events")]'
        this.filehr= '//div[@class="SubnavLabel" and contains(text(), "File")]'
        this.filecategory= '//div[@class="SubnavLabel" and contains(text(), "File Category")]'

        this.finance= '//div[@class="SidebarLabel" and contains(text(), "Finance")]'
        this.dashboardfinance= '//div[@class="SubnavLabel" and contains(text(), "Dashboard")]'
        this.billablehours= '//div[@class="SubnavLabel" and contains(text(), "Billable Hours")]'
        this.createinvoice= '//div[@class="SubnavLabel" and contains(text(), "Create Invoice")]'
        this.invoices= '//div[@class="SubnavLabel" and contains(text(), "Invoices")]'
        this.income= '//div[@class="SubnavLabel" and contains(text(), "Income")]'
        this.providentfund= '//div[@class="SubnavLabel" and contains(text(), "Provident Fund")]'
        this.expense= '//div[@class="SubnavLabel" and contains(text(), "Expense")]'
        this.salaries= '//div[@class="SubnavLabel" and contains(text(), "Salaries")]'
        this.loans= '//div[@class="SubnavLabel" and contains(text(), "Loans")]'
        this.cashcategory= '//div[@class="SubnavLabel" and contains(text(), "Cash Category")]'

        this.settings= '//div[@class="SidebarLabel" and contains(text(), "Settings")]'
        this.trash= '//div[@class="SubnavLabel" and contains(text(), "Trash")]'
        this.userrole= '//div[@class="SubnavLabel" and contains(text(), "User Role")]'
        this.managemenus= '//div[@class="SubnavLabel" and contains(text(), "Manage Menus")]'
        this.assignrolebasedmenus= '//div[@class="SubnavLabel" and contains(text(), "Assign Role Based Menus")]'
        this.organizations= '//div[@class="SubnavLabel" and contains(text(), "Organizations")]'
        this.newuser= '//div[@class="SubnavLabel" and contains(text(), "New User")]'
        this.clients= '//div[@class="SubnavLabel" and contains(text(), "Clients")]'
        this.projectsettings= '//div[@class="SubnavLabel" and contains(text(), "Project Settings")]'
    }


}
export default orgadminpage