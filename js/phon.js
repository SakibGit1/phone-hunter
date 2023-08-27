const loadData = async (searchText, isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones, isShowAll);
}
const displayPhones = (phones, isShowAll) =>{  
    //step 1:
    const phoneContainer = document.getElementById('phone-container');
      //clear search:
      phoneContainer.textContent = '';
      //display all phones if there are more than 12 items:
      const showAllContainer = document.getElementById('show-all-container');
      if(phones.length>12 && !isShowAll){
        showAllContainer.classList.remove('hidden')
      }else{
        showAllContainer.classList.add('hidden');
      }
      //is show all check:
      console.log('is show all', isShowAll);
      //display only first 12 phones for first time or page:
      if(!isShowAll){
        phones = phones.slice(0,12);
      }

    phones.forEach(phone => {
        // console.log(phone);
        //step 2:
        const phoneCard = document.createElement('div');
      
        //step 3:
        phoneCard.classList = `card py-4 bg-base-100 shadow-xl `;
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `;
        //step 4:
        phoneContainer.appendChild(phoneCard);
    });
     toggleLoadingSpiner(false)

}
// search btn
const handleSearch = (isShowAll) =>{
    toggleLoadingSpiner(true)
    const searchFld = document.getElementById('search-fld');
    const searchText = searchFld.value;
    // console.log(searchText);
    loadData(searchText, isShowAll);
}

const toggleLoadingSpiner = (isLoading) =>{
    const loadingSpiner = document.getElementById('loading-dots')
    if(isLoading){
        loadingSpiner.classList.remove('hidden')
    }else{
        loadingSpiner.classList.add('hidden')
    }
}

//show all handler btn :
const showAllBtn = () =>{
    handleSearch(true)
}
// loadData();