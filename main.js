
// async/await
async function getData(key, date) {
    try {
        const foobar = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
        //console.log( foobar);
        const infoFromServer = await foobar.json();

        console.log(infoFromServer);

        // Date
        const date = document.querySelector("#nasa-info");
        date.innerHTML = `
    <p id="date">${infoFromServer.date}</p>
`;

        // Videos and images
        let imageHtml = '';
        if (infoFromServer.hdurl) {
            imageHtml = `<p id="link"><img src="${infoFromServer.hdurl}" alt="nasa image" max-width="100%"/></p>`;
        } else if (infoFromServer.url) {
            imageHtml = `<p id="link"><iframe src="${infoFromServer.url}" alt="nasa video" max-width="100%"></iframe></p>`;
        }
        console.log(imageHtml);

        // Other info
        const content = document.querySelector("#nasa-info");
        content.innerHTML += `
    ${imageHtml}
    <p id="title">${infoFromServer.title}</p>
    <p id="description">Explanation: ${infoFromServer.explanation}</p>
`;


    } catch (error) {
        console.warn(`Nope: ${error}`);
        //console.warn( "Nope: " + error);
    }

}
getData('awat6VYt8M6lqfbOCPcnfhLmdjepxM6N9LAu09Q1', date);