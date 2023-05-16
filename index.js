const loadData=(search)=>{

        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        
        fetch(url)
       
        .then(res=>res.json())
        .then(data=>displaydata(data.meals))

}

const displaydata=data=>{
    

        const cardMenubar=document.getElementById('cardIn')

        

        cardMenubar.innerHTML=" ";
        
    
    for(SerialData of data)
    {
      
            const div=document.createElement('div')
              
            div.classList.add("col")


            div.innerHTML=`

        
            
            <div class="card h-100">
                        <img  src="${SerialData.strMealThumb
                        }" class="card-img-top " alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${SerialData.strMeal}</h5>
                          <p class="card-text">instruction:
                          <br> ${SerialData.strInstructions
                          }</p>

                          <a onclick="ModelA_Tag(${SerialData.idMeal})" href="#" class="link-warning font-weight-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">View Details</a>
                        </div>
                      </div>
            
                     
            
            
            `


            cardMenubar.appendChild(div)
     
       
    
    }

}



const searchMeal=()=>{

        const searchMealInaput=document.getElementById('searchMealInaput').value;
        
        loadData(searchMealInaput)
}


const ModelA_Tag=viewDeltalies=>{

                console.log(viewDeltalies)
       
                fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${viewDeltalies}`)
                .then(res=>res.json())
                .then(data=>displayMealDetails(data.meals[0]))

}


const displayMealDetails = meal => {
        console.log(meal)
        
        const mealDetailsLabel=document.getElementById('modelg').innerText=meal.strMeal
        console.log(mealDetailsLabel)

        const bodyId=document.getElementById('bodyId')
        bodyId.innerHTML=" "

        const div=document.createElement('div')
      
        div.innerHTML=`
        
        <img class="w-100 " src="${meal.strMealThumb}" alt=""> 
        
        <h5 class="m-2"><span class="divAlldata">Catagory:</span> <span class="divAlldataspan">${meal.strCategory}</span>  </h5>
        <h5 class="m-2"><span class="divAlldata">Area:</span> <span class="divAlldataspan">${meal.strArea}</span>   </h5>
        <p class="m-2"> <span class="divAlldata">Instructions:</span> <span class="divAlldataspan"> ${meal.strInstructions}</span> </p>
        <p class="m-2"> <span class="divAlldata">Youtube:</span> <span class="divAlldataspan">${meal.strYoutube}</span>   </p>


        
        `
        bodyId.appendChild(div)

       
       
    }




loadData('fish')