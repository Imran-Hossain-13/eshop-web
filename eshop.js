const spinnerId = document.getElementById('spinner');
const headerId = document.getElementById('header');
const menuId = document.getElementById('menu-sticky');
const section1Id = document.getElementById('section-one');
const section2Id = document.getElementById('section-two');
const section3Id = document.getElementById('section-three');
const section4Id = document.getElementById('section-four');
const section5Id = document.getElementById('section-five');
const section6Id = document.getElementById('section-six');
const section7Id = document.getElementById('section-seven');
const footerId = document.getElementById('footer');
setTimeout(() => {
    spinnerId.style.display = 'none';
    headerId.style.display = 'block';
    menuId.style.display = 'flex';
    section1Id.style.display = 'flex';
    section2Id.style.display = 'grid';
    section3Id.style.display = 'block';
    section4Id.style.display = 'flex';
    section5Id.style.display = 'flex';
    section6Id.style.display = 'flex';
    section7Id.style.display = 'block';
    footerId.style.display = 'block';
}, 000);

const carticonId = document.getElementById('cart-icon');
const myDivId = document.getElementById('myDiv');
carticonId.addEventListener('mouseover',function(){
    myDivId.style.opacity = '100%';
    myDivId.style.transform = 'translateY(0)';
    myDivId.style.transition = '1s';
});
carticonId.addEventListener('mouseout',function(){
    myDivId.style.transition = '1s';
    myDivId.addEventListener('mouseover',function(){
        myDivId.style.opacity = '100%';
        myDivId.style.transform = 'translateY(0)';
    });
    myDivId.addEventListener('mouseout',function(){
        myDivId.style.opacity = '0%';
        myDivId.style.transform = 'translateY(20px)';
    });
    myDivId.style.opacity = '0%';
    myDivId.style.transform = 'translateY(20px)';
});


const searchId = document.getElementById('search-icon');
const inputId = document.getElementById('input-div-two');
let count = 0;
searchId.addEventListener('click', function () {
    if ((count % 2) == 0) {
        inputId.style.display = 'none';
    } else if ((count % 2) == 1) {
        inputId.style.display = 'flex';
    }
    count++;
})

let count2 = 0
const offcanId = document.getElementById('off-body');
const threebarId = document.getElementById('three-bar');
threebarId.addEventListener('click', function () {
    if ((count2 % 2) == 0) {
        offcanId.style.opacity = '1';
        offcanId.style.transform = 'translateY(0)';
        offcanId.style.transition = '1s';
    } else if ((count2 % 2) == 1) {
        offcanId.style.opacity = '0';
        offcanId.style.transform = 'translateY(-200px)';
        offcanId.style.transition = '1s';

    }
    count2++;
})


const faCart = document.getElementsByClassName('fa-cart-arrow-down');
let p=0;
for (var i = 0; i != faCart.length; i++) {
    faCart[i].addEventListener('click', function (event) {
        p++;
        const heart = event.target.parentElement.parentElement.parentElement.parentElement;

        const priceDiv = heart.getElementsByClassName('price-div');
        const cartDiv = heart.getElementsByClassName('cart');
        const cartDivImg = heart.querySelectorAll('.img-div > .img-Tag')[0].getAttribute('src');

        const price = priceDiv[0].getElementsByClassName('price');
        const proName = priceDiv[0].getElementsByClassName('pro-name');
        let priceValue = price[0].innerText;
        let proNameVal = proName[0].innerText;

        //Show cart in cartbox

        const cartNumID = document.getElementById('cart-number');
        const cartNum2ID = document.getElementById('cart-number2');
        let cartNumVal = cartNumID.innerText;
        cartNumVal = parseInt(cartNumVal);
        cartNumVal++;
        cartNumID.innerText = cartNumVal;
        cartNum2ID.innerText = cartNumVal;
        
        const totalPrice = document.getElementById('total-price');
        let totalamount = totalPrice.innerText;
        totalamount = parseInt(totalamount);
        priceValue = parseInt(priceValue);
        totalamount =priceValue + totalamount;
        totalPrice.innerText = totalamount;

        const addCartId = document.getElementById('add-cart');
            const div = document.createElement('div');
            div.innerHTML = `
                    <div class='pro-item-box'>
                        <p class='proname'>${proNameVal}</p>
                        <span>$<p class='proprice'>${priceValue}</p></span>
                        <button>X</button>
                    </div>
                    <img class='cart-img' src='${cartDivImg}'>
            `
            div.classList.add('pro_catag');
            addCartId.appendChild(div);

            if(p == 4){
                const addCartId = document.getElementById('add-cart');
                addCartId.style.overflowY = 'scroll';
                addCartId.style.height = '320px';
            }
    })
}




const munuId = document.getElementById('menu-sticky');
const catagoryBoxId = document.getElementById('catagory-box');
window.onscroll = function () {
    if (scrollY > 168) {
        catagoryBoxId.style.display = 'none';
        const catagory = document.getElementsByClassName('catagory-text');
        const catagoryItemBox = document.getElementsByClassName('catagory-item-box')[0];
        catagory[0].addEventListener('mouseover', function () {
            catagoryItemBox.style.display = 'block';
            // catagoryItemBox.style.transition = '1s';
        })
        catagoryBoxId.addEventListener('mouseover', function () {
            catagoryItemBox.style.display = 'block';
        })
        catagory[0].addEventListener('mouseout', function () {
            if (scrollY < 168) {
                catagoryItemBox.style.display = 'block';
            } else {
                catagoryItemBox.style.display = 'none';
            }
        })

        catagoryBoxId.addEventListener('mouseover', function () {
            catagoryItemBox.style.display = 'block';
        })
        catagoryBoxId.addEventListener('mouseout', function () {
            catagoryItemBox.style.display = 'none';
        })
    }
    else if (scrollY < 168) {
        catagoryBoxId.style.display = 'block';
    }

}

// const element = document.getElementById("myDIV"); 
// element.offsetHeight = 230;
// console.log(element.offsetHeight);
 


