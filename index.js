let URL_chains = "https://api.gopluslabs.io/api/v1/supported_chains"

function getSupportedChains() {
    fetch(URL_chains)
        .then(response => {
            if (!response.ok) {
                setError(response.ok);
            }
            
            return response.json(); 
        })
        .then(data => {
            console.log(data);  
        })
        .catch(error => {
            setError(error);
        });
}

function setError(e){

}