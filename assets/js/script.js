const menuBtns = document.querySelectorAll('.menu-btn');
const foodItems = document.querySelectorAll('.group-item');

let activeBtn = "active";

showFoodMenu(activeBtn);

menuBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetActiveBtn();
        showFoodMenu(btn.id);
        btn.classList.add('active-btn');
    });
});

function resetActiveBtn(){
    menuBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

function showFoodMenu(newMenuBtn){
    activeBtn = newMenuBtn;
    foodItems.forEach((item) => {
        if(item.classList.contains(activeBtn)){
            item.style.display = "grid";
        } else {
            item.style.display = "none";
        }
    });
}

const groupItems = document.querySelectorAll('.group-item');

groupItems.forEach((item) => {
    const groupItemPrice = item.querySelector('.group-item-price');
    const groupItemTotal = item.querySelector('.group-item-total');
    const subtractBtn = item.querySelector('.subtract');
    const sumBtn = item.querySelector('.sum');
    const un = item.querySelector('.un');

    let total = 0;

    subtractBtn.addEventListener('click', () => {
        if (un.textContent > 0) {
            un.textContent--;
            total -= parseFloat(groupItemPrice.textContent.replace('R$', '').replace(',', '.'));
            groupItemTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
        }
    });

    sumBtn.addEventListener('click', () => {
        un.textContent++;
        total += parseFloat(groupItemPrice.textContent.replace('R$', '').replace(',', '.'));
        groupItemTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    });
});


