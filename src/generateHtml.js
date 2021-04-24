//function that handles taking the data and generating html using that data
const generateHtml = data => { 

  //function that handles dynamically setting the icon based on the employee role
  const getIcon = role => {
    return {
      "Manager": `<i class="fa fa-coffee" aria-hidden="true"></i>`,
      "Engineer": `<i class="fa fa-laptop" aria-hidden="true"></i>`,
      "Intern": `<i class="fa fa-graduation-cap" aria-hidden="true"></i>`,
    }[role];
  };

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title></title>
      <meta name="description" content="">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css">
      <script src="https://kit.fontawesome.com/b7e1687dd8.js" crossorigin="anonymous"></script>
    </head>
    <body>

    <header class="p-5 bg-danger text-white text-center">
      <h1>My Team</h1>
    </header>

    <main class="row justify-content-center my-3">

      ${data.map(employee => `
        <div class="card m-5" style="width: 18rem;">
          <div class="card bg-primary text-white p-3">
            <h3 class="card-title">${employee.name.charAt(0).toUpperCase() + employee.name.slice(1)}</h3>
            <h5 class="card-subtitle">${getIcon(employee.getRole()) + ' ' + employee.getRole()}</h5>
          </div>
          <div class="container p-3 bg-light">
            <ul class="list-group list-group-flush mx-auto">
              <li class="list-group-item">ID: ${employee.id}</li>
              <li class="list-group-item">Email: <a href="#" target="blank">${employee.email}</a></li>
              <li class="list-group-item">${
                employee.getRole() == "Manager" ? `Office Number: ${employee.officeNumber}` :
                employee.getRole() == "Engineer" ? `GitHub: <a href="https://github.com/" target="blank">${employee.github}</a>` :
                employee.getRole() == "Intern" ? `School: ${employee.school}` : ''
              }</li>
            </ul>
          </div>
        </div>
      `).join("")}

    </main>

      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>
  </html>
  `;
};

module.exports = generateHtml;