class projectsPage{

    menu: string;
    projects: string;
    startnewproject: string;
    projectname: string;
    projectcategory: string;
    projectcode: string;
    projectdescription: string;
    projecturl: string;
    startdate: string;
    enddate: string;
    projectstatus: string;
    currencytype: string;
    projectprice: string;
    projectlogo: string;
    projectleader: string;
    projectteam: string;
    cancel: string;
    saveproject: string;
    backtoprojects: string;



    constructor(){

        this.menu= '//button[@name="menuBtn"]'
        this.projects= '//div[@class="SidebarLabel" and contains(text(), "Projects")]'
        this.startnewproject= '//a[@href="/add-new-project"]'
        this.projectname= '//input[@name="projectName"]'
        this.projectcategory= '//select[@name="projectCategoryName"]'
        this.projectcode= '//input[@name="projectCode"]'
        this.projectdescription= '//textarea[@name="description"]'
        this.projecturl= '//input[@name="projectURL"]'
        this.startdate= '//input[@name="projectStartDate"]'
        this.enddate='//input[@name="projectEndDate"]'
        this.projectstatus= '//select[@name="projectStatus" ]'
        this.currencytype= '//select[@name="currencyType" ]'
        this.projectprice= '//input[@name="projectPrice" ]'
        this.projectleader= '//select[@name="projectLeader" ]'
        this.projectteam= '//select[@name="projectTeam" ]'
        this.saveproject= ''
        this.backtoprojects= ''
        this.cancel= ''

    }
}
export default projectsPage

