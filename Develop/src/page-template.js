

const managerTeamHtml="";
const engineerTeamHtml="";
const internTeamHtml="";


// create team function with team array passed in
const create_team_function = (team) => {
//need a for loop to loop over the team members 
// for (let i=0; i<team.length; i++){
//   if (team[i].getRole=== 'manager'){
//     console.log('adding manager to html');
//     create_manager_html_function(team[i]);
// }
// if (team[i].getRole=== 'engineer'){
//   console.log('adding engineer to html');
//   create_engineer_html_function(team[i]);
// }
// if (team[i].getRole=== 'intern'){
//   console.log('adding intern to html');
//   create_intern_html_function(team[i]);
// }
// }
    // create the manager html function with manager object passed in as input parameter
    // - return template literal replacing name, role, id, email, office number with getXXX methods from manager object
    const create_manager_html_function = (manager) => {
        let managerHtml= `
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${manager.getName()}</div>
        <div class="card-body">
          <h5 class="card-title"></h5>
          <li class="body-item">ID:${manager.getID()}</li>
          <li class="body-item">Email:${manager.getEmail()}</li>
          <li class="body-item">Office:${manager.getOfficeNumber()}</li>
        </div>
        `;
        managerTeamHtml+=managerHtml;
    };

    // create the html function for engineers with engineer object passed in as input parameter
    // - return template literal replacing name, role, id, email, github name with getXXX methods from engineer object
    const create_engineer_html_function = (engineer) => {
        let enginnerHtml=`
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${engineer.getName()}</div>
        <div class="card-body">
          <h5 class="card-title"></h5>
          <li class="body-item">ID:${engineer.getID()}</li>
          <li class="body-item">Email:${engineer.getEmail()}</li>
          <li class="body-item">Github:${engineer.getGithub()}</li>
        </div>
        `;
        engineerTeamHtml+=enginnerHtml;
    };

    // create the html function for interns with intern object passed in as input parameter
    // - return template literal replacing name, role, id, email, school name with getXXX methods from intern object
    const create_intern_html_function = (intern) => {
        let internHtml= `
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${intern.getName()}</div>
        <div class="card-body">
          <h5 class="card-title"></h5>
          <li class="body-item">ID:${intern.getID()}</li>
          <li class="body-item">Email:${intern.getEmail()}</li>
          <li class="body-item">School:${intern.getSchool()}</li>
        </div>
        `;
        internTeamHtml+=internHtml;
    };

    // create an empty employee html array to store employee html for manager, engineers, interns
    // const html = [];

    // make call to filter method on team array - for each employee in team array to check if the employee's role is "Manager" via the employee's get role method and assign the new manager array returned from filter method to a new variable
    // make call to map method on the new manager array to call create manager html function and assign the new manager html array returned from map method to a new variable
    // make call to join method on the new manager html array to convert it to html string and assign it to a new variable
    // push the new manager html string to the employee html array
    // option - you can use chained array methods to avoid create new variables
    // html.push(team
    //     .filter(Employee=> Employee.getRole()==='manager')
    //     .map(manager=>create_manager_html_function(manager) )
    // );

    // make call to filter method on team array - for each employee in team array to check if the employee's role is "Engineer" via the employee's get role method and assign the new engineer array returned from filter method to a new variable
    // make call to map method on the new engineer array to call create engineer html function and assign the new engineer html array returned from map method to a new variable
    // make call to join method on the new engineer html array to convert it to html string and assign it to a new variable
    // push the new engineer html string to the employee html array
    // option - you can use chained array methods to avoid create new variables
    // html.push(team
    //     .filter(Employee=> Employee.getRole()==='engineer')
    //     .map(engineer=>create_engineer_html_function(engineer))
    //     .join('')
    // );

    // make call to filter method on team array - for each employee in team array to check if the employee's role is "Intern" via the employee's get role method and assign the new intern array returned from filter method to a new variable
    // make call to map method on the new intern array to call create intern html function and assign the new intern html array returned from map method to a new variable
    // make call to join method on the new intern html array to convert it to html string and assign it to a new variable
    // push the new intern html string to the employee html array
    // option - you can use chained array methods to avoid create new variables
    // html.push(team
    //     .filter(Employee=> Employee.getRole()==='intern')
    //     .map(engineer=>create_intern_html_function(intern))
    //     .join('')
    // );

    // call join method on employee html array to convert it to html string and return it to the caller
    return html.join("");

}

// export function to generate entire page with team array passed in as input parameter from index.js
// - return template literal for entire html replacing team member html with returned value from create-team-function via template literal varaible expression
function createTeam(data) {

    return `
    <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="Description" content="Team profile html page generated through node commands."/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
      <link rel="stylesheet" href="../assets/css/style.css">

    <div class="card">
    <div class="card-header">
      My Team
    </div>
    <div class="card-body">
      <h5 class="card-title">Team Member</h5>
      <p class="card-text">${managerTeamHtml}</p>
      <p class="card-text">${engineerTeamHtml}</p>
      <p class="card-text">${internTeamHtml}</p>
    </div>
  </div>
    `;
};
module.exports= createTeam;