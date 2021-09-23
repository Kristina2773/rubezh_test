function Search() {
    let em = document.querySelectorAll('.elem');
    for(let s of em) {
        s.onclick = function () {
            s.classList.toggle('light');
        }
    }
}

export default Search