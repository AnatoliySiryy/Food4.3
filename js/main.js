
    new WOW().init();

    //day 1
    const cardButton = document.querySelector("#card-button");
    const modal = document.querySelector(".modal");
    const close = document.querySelector(".close");    
    const buttonAuth = document.querySelector("#button-auth");
    const modalAuth = document.querySelector('.modal-auth');
    const closeAuth = document.querySelector('.close-auth');
    const logInForm = document.querySelector('#logInForm');
    const logInInput = document.querySelector('#login');
    const userName = document.querySelector('.user-name');
    const buttonOut = document.querySelector('.button-out');
    const cardsReust = document.querySelector('.cards-reusts');
    const containerPromo = document.querySelector('.container-promo');
    const restaurants = document.querySelector('.restaurants');
    const menu  = document.querySelector('.menu');
    const logo = document.querySelector('.logo');
    const cardsMenu = document.querySelector('.cards-menu');

    let login = localStorage.getItem('gloDelivery');

    function toggleModal(){
        modal.classList.toggle('is-open');
    }

    function toggleModalAuth(){
        modalAuth.classList.toggle("is-open");
        logInInput.style.borderColor = '';
        if (modalAuth.classList.contains("is-open")) {
        
            disableScroll();
        } else {
            enableScroll();
        }
    }

    function clearForm() {
        logInInput.style.borderColor = '';
        logInForm.reset();
    }


function authorized() {
    
    function logOut() {
        
        login = null;
        localStorage.removeItem('gloDelivery', login);
        buttonAuth.style.display = '';
        userName.style.display ='';
        buttonOut.style.display= '';
        buttonOut.removeEventListener('click', logOut);
        checkAuth();
    }
   
    console.log('авторизован');
  
    userName.textContent = login;

    buttonAuth.style.display = 'none';
    userName.style.display ='inline';
    buttonOut.style.display= 'block';
    cardsReust.addEventListener('click', openGoods);
    buttonOut.addEventListener('click', logOut);
    

}

function notAuthorizer() {

    console.log('Не авторизован');
    function logIn(event) {
     
        event.preventDefault();
        if (logInInput.value.trim()) {
        login = logInInput.value;
        localStorage.setItem('gloDelivery', login)
        toggleModalAuth();
       
        buttonAuth.removeEventListener('click', toggleModalAuth);
        closeAuth.removeEventListener('click', toggleModalAuth);
        logInForm.removeEventListener('submit', logIn);
        logInForm.reset();
        cardsReust.removeEventListener('click', toggleModalAuth);
        checkAuth();
    }
    else { 
        logInInput.style.borderColor = '#ff0000';
        logInInput.value = '';
    }
}
cardsReust.addEventListener('click', toggleModalAuth);
    buttonAuth.addEventListener('click', toggleModalAuth);
    closeAuth.addEventListener('click', toggleModalAuth);
    logInForm.addEventListener('submit', logIn);
    
     
    modalAuth.addEventListener('click', function(event) {
        if (event.target.classList.contains('is-open')) {
            toggleModalAuth()
        }
    })
}

buttonAuth.addEventListener('click', clearForm);

function checkAuth() {
    if(login) {
        
        authorized();
    } else {
        notAuthorizer();
    }

}


checkAuth();

function createCardReust() {
    const card = `
    <a class="card cards-reust">
		<img src="img/sushi.png" alt="image" class="card-image">
		<div class="card-text">
			<div class="card-heading">
				<h3 class="card-title">Точка еды</h3>
				<span class="card-tag tag">30 минут</span>
			</div>
				<!-- /.card-heading -->
			<div class="card-info">
				<div class="raiting">
					<img src="img/star.svg" alt="star" class="star">
					3.5</div>
				<div class="price">От 700 ₽</div>
				<div class="category">Суши</div>
			</div>
			<!-- /.card-info -->
		</div>
		<!-- /.card-text -->
	</a>
	<!-- /.card -->
    `;

    cardsReust.insertAdjacentHTML('beforeend', card);
}
function createCardGood() {
    const card = document.createElement('div');
    card.className = 'card';
  
    card.insertAdjacentHTML('beforeend', `
<img src="img/piza.png" alt="image" class="card-image">
<div class="card-text">
  <div class="card-heading">
    <h3 class="card-title">PizzaBurger</h3>
    <span class="card-tag tag">45 минут</span>
  </div>
    <!-- /.card-heading -->
  <div class="card-info">
    <div class="raiting">
      <img src="img/star.svg" alt="star" class="star">
      4</div>
    <div class="price">От 1000 ₽</div>
    <div class="category">Пицца</div>
  </div>
  <!-- /.card-info -->
</div>
<!-- /.card-text -->

<!-- /.card -->
  `);
  
  cardsMenu.insertAdjacentElement('beforeend', card);
    
  }
    
function openGoods(event) {
    const target = event.target;

    const reust = target.closest('.cards-reust');
   
    if(reust) {
        cardsMenu.textContent = '';
        containerPromo.classList.add('hide');
        restaurants.classList.add('hide');
        menu.classList.remove('hide');
        createCardGood();
        createCardGood();
        createCardGood();
    }
   
}


cardButton.addEventListener('click', toggleModal);
  close.addEventListener('click', toggleModal ); 

logo.addEventListener('click', 
function() {
  containerPromo.classList.remove('hide');
    restaurants.classList.remove('hide');
    menu.classList.add('hide');
})
createCardReust();
createCardReust();
createCardReust();