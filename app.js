import { Github } from './github.js';
import { UI } from './ui.js';

// class'ın örneğini oluşturma
const github = new Github();
const ui = new UI();

//! Html'den gelenler
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-btn');
const alert = document.querySelector('.alert');

//! olay izleyicileri
searchButton.addEventListener('click', getInput);

//! methodlar
function getInput() {
  // arama terimi dolu ise çalışır
  if (searchInput.value) {
    // api 'isteği atar
    github
      .fetchUserData(searchInput.value)
      .then((res) => {
        // eğer kullanıcı bulunamadıysa
        if (res.data.message === 'Not Found') {
          showAlert2('Kullanıcı Bulunamadı!');


  // arama terimi boş ise çalışır
  function showAlert2(message2) {
    alertDiv.textContent = message2;
    alertDiv.style.display = 'block'; // Uyarı kutusunu görünür hale getir
    alertDiv.style.border = '2px solid #FFF3CD'; 
    alertDiv.style.marginTop = '20px';
    alertDiv.style.backgroundColor = '#FFF3CD';
    alertDiv.style.color = 'red';
     // Uyarı kutusunu görünür hale getir
  
    setTimeout(() => {
      alertDiv.style.display = 'none'; // Uyarı kutusunu gizle
    }, 3000);
  }

          
        } else {
          // kullanıcı bulunduysa
          ui.renderProfile(res.data);
          ui.renderProjects(res.repos);
        }
      })
      .catch((err) => console.log(err));

    return;
  }
  showAlert('Lütfen bir kullanıcı adı girin!');


  // arama terimi boş ise çalışır
  function showAlert(message) {
    alertDiv.textContent = message;
    alertDiv.style.display = 'block'; // Uyarı kutusunu görünür hale getir
    alertDiv.style.border = '2px solid #FFF3CD'; 
    alertDiv.style.marginTop = '20px';
    alertDiv.style.backgroundColor = '#FFF3CD';
    alertDiv.style.color = 'red';
     // Uyarı kutusunu görünür hale getir
  
    setTimeout(() => {
      alertDiv.style.display = 'none'; // Uyarı kutusunu gizle
    }, 3000);
  }
 
  
  
  
  
  
     
          
          
}


const modeToggleBtn = document.getElementById('mode-toggle-btn');
const lightModeStylesheet = document.getElementById('light-mode-stylesheet');

// Function to toggle between dark and light modes
function toggleMode() {
  // Toggle the "disabled" attribute to enable or disable the light mode stylesheet
  lightModeStylesheet.disabled = !lightModeStylesheet.disabled;

  // Update the button text based on the current mode
  const currentMode = lightModeStylesheet.disabled ? 'Koyu Mod' : 'Aydınlık Mod';
  modeToggleBtn.innerText = currentMode;
}

// Add event listener to the mode toggle button
modeToggleBtn.addEventListener('click', toggleMode);

