const postContainer = document.querySelector('.card-container');

    const postMethods = async () => {
        try {
            const res = await fetch("http://localhost:3000/users/get-all");
            const data = await res.json();

                data.map((data) => {
                const postDiv = document.createElement('div');
                postDiv.classList.add('card');
                postDiv.innerHTML = `
                <img src=${data.imageURL}>
                <h3 class="card-heading">Captured By: ${data.username}</h3>
                <p class="card-body"> 
                Date : ${data.capturedDate}</p>
                `
                postContainer.appendChild(postDiv);
            })
            
        } catch (error) {
            console.log(error)
        }
    
    }
postMethods()

function showLoader() {
    const loader = document.getElementByClass('.loader');
    loader.style.display = "block";
}

function hideLoader() {
    const loader = document.getElementByClass('.loader');
    loader.style.display = "none";
}