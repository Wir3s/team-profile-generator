function generateHtml(data) {
  console.log(data);
  const findRole = data.filter(data.getRole());
  switch (findRole) {
    case "Manager":
      generateManager(data);
      break;
    case "Engineer":
      generateEngineer(data);
      break;
    case "Intern":
      generateIntern(data);
      break;
  }

  function generateManager(data) {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Team Manager</h5>
      <h6 class="card-subtitle mb-2 text-muted">${data.getName()}</h6>
      <p class="card-text">${data.getId()}
      ${data.getOffNum()}
      </p>
      <a href="#" class="card-link">${data.getEmail()}</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>`;
  }
  function generateIntern(data) {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Team Manager</h5>
      <h6 class="card-subtitle mb-2 text-muted">${data.getName()}</h6>
      <p class="card-text">${data.getId()}
      ${data.getSchool()}
      </p>
      <a href="#" class="card-link">${data.getEmail()}</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>`;
  }
  function generateEngineer(data) {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Team Manager</h5>
      <h6 class="card-subtitle mb-2 text-muted">${data.getName()}</h6>
      <p class="card-text">${data.getId()}
      ${data.getGitHub()}
      </p>
      <a href="#" class="card-link">${data.getEmail()}</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>`;
  }
}

// <!-- First Card -->

// <!-- Second Card -->
// <div class="card" style="width: 18rem;">
//     <div class="card-body">
//       <h5 class="card-title">Card title</h5>
//       <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//       <a href="#" class="card-link">Card link</a>
//       <a href="#" class="card-link">Another link</a>
//     </div>
// </div>
// <!-- Third Card -->
// <div class="card" style="width: 18rem;">
//     <div class="card-body">
//       <h5 class="card-title">Card title</h5>
//       <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//       <a href="#" class="card-link">Card link</a>
//       <a href="#" class="card-link">Another link</a>
//     </div>
// </div>
// <!-- Fourth Card-->
// <div class="card" style="width: 18rem;">
//     <div class="card-body">
//       <h5 class="card-title">Card title</h5>
//       <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//       <a href="#" class="card-link">Card link</a>
//       <a href="#" class="card-link">Another link</a>
//     </div>
// </div>
// <!-- Fifth Card -->
// <div class="card" style="width: 18rem;">
//     <div class="card-body">
//       <h5 class="card-title">Card title</h5>
//       <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//       <a href="#" class="card-link">Card link</a>
//       <a href="#" class="card-link">Another link</a>
//     </div>
// </div>

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
        ${generateHtml(data)}
           
            
        </div>
    </div>
   
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
  </body>
</html>`;
};
