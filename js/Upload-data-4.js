const upload = document.querySelector(".upload");

const data = document.querySelector(".data");

const alerts = document.getElementById("alert");


upload.addEventListener("click", function () {
  alerts.innerHTML = `
  <div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Successfully Added</strong> 
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  `;
  data.innerHTML += `

  
  <div class="upload-data">
  <table class="table table-striped">
      <thead class="table-secondary">
      <tr>
          <th><strong>Schedule Position</strong> </th>
          <th><strong>1</strong> </th>
      </tr>
      </thead>
      <tbody>
      <tr>
          <td>File name</td>
          <td>WebService Upload</td>
      </tr>
      <tr class="">
          <td>Created at </td>
          <td>09:48:02 05/01/2022</td>
      </tr>
      <tr>
          <td>Download a list of upload errors 
              (if blank there were none)</td>
          <td></td>
      </tr>
      <tr>
          <td>Start Time</td>
          <td></td>
      </tr>
      <tr>
          <td>Upload Progress</td>
          <td>FINISHED</td>
      </tr>
      <tr>
          <td>Finish Time</td>
          <td>09:50:26 05/01/2022</td>
      </tr>
      <tr>
          <td>File Type</td>
          <td>Wonde</td>
      </tr>
      <tr>
          <td>Upload Settings</td>
          <td>Identify students who are ‘leavers’ (ON). 
              Remove students from old teachers/classes (ON)</td>
      </tr>
      
      </tbody>
  </table>
  <div class="my-3">
      <div class="d-flex">
          <div class="c1e pad-buttton delete">Delete</div>
      </div>
  </div>
</div>
  `;
});

const Delete = document.querySelectorAll(".delete");
const uploadData = document.querySelectorAll(".upload-data");


function popUp() {}

Delete.forEach(function (item, index) {
  setTimeout(popUp, 2000);
  item.addEventListener("click", function () {
    alerts.innerHTML = `
  <div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>Successfully Deleted</strong> 
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  `;
    this.parentElement.style.display = "none";
  });
});
