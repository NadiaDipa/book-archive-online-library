let numberOfItemToBeDisplayed = 20;

// search section
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // clear data 
    searchField.value = '';

    if (searchText === '') {
        alert('Search field cannot be empty!');
    } else {
        let url = `http://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                displaySearchResult(data.docs)
            });
    }
}

//display section
const displaySearchResult = books => {
    const totalItemSize = books.length;
    document.getElementById('total-item-found').innerText = `Total item found: ${totalItemSize}`;
    numberOfItemToBeDisplayed = Math.min(numberOfItemToBeDisplayed, totalItemSize);
    books.slice(0, numberOfItemToBeDisplayed)

    const searchResult = document.getElementById('search-result'); //div
    searchResult.textContent = '';

    if (totalItemSize === 0) {
        searchResult.innerText = 'No Result Found';
    }
    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class = "card h-100">
                <img src = "https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg"
                class="card-img-top img-fluid" alt="">
               
                <div class = "card-body">
                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <th scope ="row">Book Name</th>
                                <td>${book.title}</td> 
                            </tr>
                            <tr>
                                <th scope ="row">Author Name</th>
                                <td>${book.author_name}</td> 
                            </tr> 
                            <tr>
                                <th scope ="row">First Publish Date</th> 
                                <td>${book.first_publish_year}</td> 
                            </tr>
                        </tbody>
                    </table>
                </div> 
            </div>
        `;
        searchResult.appendChild(div);
    })

}