class employeepage{

    menu: string;
    dashboard: string;
    noticeboard: string;
    stats: string;
    projects: string;
    attendance: string;
    dayplanner: string;
    feedback: string;
    templates: string;
    assignfeedback: string;
    feedbackreview: string;
    givefeedback: string;


constructor(){

    this.menu= '//button[@name="menuBtn"]'
    this.dashboard= '//div[@class="SidebarLabel" and contains(text(), "Dashboard")]'
    this.noticeboard= '//div[@class="SidebarLabel" and contains(text(), "Notice Board")]'
    this.stats= '//div[@class="SidebarLabel" and contains(text(), "Stats")]'
    this.projects= '//div[@class="SidebarLabel" and contains(text(), "Projects")]'
    this.attendance= '//div[@class="SidebarLabel" and contains(text(), "Attendance")]'
    this.dayplanner= '//div[@class="SidebarLabel" and contains(text(), "Day Planner")]'
    this.feedback= '//div[@class="SidebarLabel" and contains(text(), "Feedback")]'
    this.templates= '//div[@class="SubnavLabel" and contains(text(), "Templates")]'
    this.assignfeedback= '//div[@class="SubnavLabel" and contains(text(), "Assign Feedback")]'
    this.feedbackreview= '//div[@class="SubnavLabel" and contains(text(), "Feedback Review")]'
    this.givefeedback= '//div[@class="SubnavLabel" and contains(text(), "Give Feedback")]'



}

}
export default employeepage;
