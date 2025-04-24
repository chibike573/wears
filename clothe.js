import { products } from "./products.js";

// start of observer

const h1=document.querySelector('.translate');
const image=document.querySelector('.image')
const obs=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.add('show')
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
           
        }
        obs.unobserve(entry.target)

        
    })
})

const obs2=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.add('showimage')
        if (entry.isIntersecting) {
            entry.target.classList.add('showimage')
           
        }
        obs.unobserve(entry.target)

        
    })
})

obs.observe(h1)
obs2.observe(image)

// end of observer

// start of scroll-button
const scrollButton=document.querySelector('.scroll-button')

window.addEventListener('scroll', ()=>{
    if (window.scrollY>100) {
        scrollButton.classList.add('scroll')
    }

    else{scrollButton.classList.remove('scroll')}
})


scrollButton.addEventListener('click', ()=>{
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
})

// end of scroll-button

// start of gender wear

const button=document.querySelectorAll('.but');

document.addEventListener('DOMContentLoaded', dom())


    function select() {
        
    
button.forEach(buts=>{
    buts.addEventListener('click', ()=>{
        let html=''
        const {productId}=buts.dataset;
        

        products.forEach(product=>{
            if (productId===product.id) {
               html+= `<div id="gc">
               <img class="image" src="${product.img}" alt="">
                    
                    <p class="name">${product.nam}</p>
                    <p class="price">${product.price}</p>
                    <p><button>Add To Cart</button></p>
                
                </div>`;

                

                
                const grid=document.querySelector('.gender-grid')
                grid.innerHTML=html
                // const image=document.querySelectorAll('.image')
                //     image[3].style.width='12rem'

                const div=document.getElementById('gc')
                    div.style.gridRow=`1/3`

                     const image=document.querySelectorAll('.image')
                    // image[3].style.marginTop=`2rem`
            }

            button[1].classList.remove('color')

          
            
        })
        
    })
})


}

select()

function dom() {
    button[1].classList.add('color')
    let html=''
    products.forEach(product=>{
        if (product.id!=='2') {
           html+= `<div id="gc">
           <img class="image" src="${product.img}" alt="">
                
                <p class="name">${product.nam}</p>
                <p class="price">${product.price}</p></br>
                <button>Add To Cart</button>
            
            </div>`;

            
            const grid=document.querySelector('.gender-grid')
            grid.innerHTML=html

            // const image=document.querySelectorAll('.image')
                //     image[1].style.width='12rem'

            const div=document.getElementById('gc')
                    div.style.gridRow=`1/3`
        }

      
        
    })
}

// end of gender wear




