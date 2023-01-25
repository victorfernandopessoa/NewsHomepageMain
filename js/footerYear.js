function footerYear(id_element, year){
    let date         = new Date();
    let current_year = date.getFullYear();
    let text         = "";
        text = current_year > year ? '©'+year+'-'+current_year : '©'+year;

    $(id_element).text(text);
}