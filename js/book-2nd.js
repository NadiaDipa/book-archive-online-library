const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    // clear data 
    searchField.value = '';


    const url = `http://openlibrary.org/search.json?q=${searchText}`
    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))
}

//display
const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    books.forEach(book => {
        // console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        searchResult.textContent = '';
        div.innerHTML = `
            <div class = "card h-100">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}.jpg" class="card-img-top img-fluid" alt="">
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