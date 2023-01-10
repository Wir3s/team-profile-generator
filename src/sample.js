function generateHtml(data) {
  const findRole = data.map((employee) => employee.getRole());
  let builder = "";
  for (let i = 0; i < findRole.length; i++) {
    switch (findRole[i]) {
      case "Manager":
        builder += generateManager(data[i]);
        break;
      case "Engineer":
        builder += generateEngineer(data[i]);
        break;
      case "Intern":
        builder += generateIntern(data[i]);
        break;
    }
  }


  function generateManager(data) {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Team Manager</h5>
      <h6 class="card-subtitle mb-2 text-muted">${data.getName()}</h6>
      <p class="card-text">ID: ${data.getId()}
     Office Number: ${data.getOffNum()}
      </p>
      <a href="mailto:${data.getEmail()}" class="card-link">Email:${data.getEmail()}</a>\
    </div>
  </div>`;
  }

  function generateIntern(data) {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Intern</h5>
      <h6 class="card-subtitle mb-2 text-muted">${data.getName()}</h6>
      <p class="card-text">ID: ${data.getId()}

      School: ${data.getSchool()}
      </p>
      <a href="mailto:${data.getEmail()}" class="card-link">${data.getEmail()}</a>
    </div>
  </div>`;
  }

  function generateEngineer(data) {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Engineer</h5>
      <h6 class="card-subtitle mb-2 text-muted">${data.getName()}</h6>
      <p class="card-text">ID: ${data.getId()}

     GitHub: ${data.getGitHub()}
      </p>
      <a href="mailto:${data.getEmail()}" class="card-link">${data.getEmail()}</a>
    </div>
  </div>`;
  }
  return builder;
}

module.exports = (data) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
</head>
  <body>
    <div class = "container">
        <div class = "row">
        <span class="text-bg-success p-3">Our Team</span>
        ${generateHtml(data)}
           
            
        </div>
    </div>
   
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
  </body>
</html>`;
};
