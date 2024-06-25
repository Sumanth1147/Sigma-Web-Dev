// Helper function to format views
function formatViews(views) {
    if (views >= 1000000) {
        return (views / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (views >= 1000) {
        return (views / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    } else {
        return views.toString();
    }
}


function createCard(title, cName, views, monthsOld, duration, thumbnail){
    // Finish this function
    let formattedViews = formatViews(views);

    // Create container div
    let containerDiv = document.createElement("div");
    containerDiv.setAttribute("class", "container");

    // Create first item div
    let itemDiv1 = document.createElement("div");
    itemDiv1.setAttribute("class", "item");

    // Create image element
    let img = document.createElement("img");
    img.setAttribute("src", thumbnail);

    // Create duration div and p
    let durationDiv = document.createElement("div");
    let durationP = document.createElement("p");
    durationP.textContent = duration;
    durationDiv.appendChild(durationP);

    // Append image and duration div to item div
    itemDiv1.appendChild(img);
    itemDiv1.appendChild(durationDiv);

    // Create second item div
    let itemDiv2 = document.createElement("div");
    itemDiv2.setAttribute("class", "item");

    // Create title and details
    let titleH3 = document.createElement("h3");
    titleH3.textContent = title;
    let detailsP = document.createElement("p");
    detailsP.textContent = `${cName} . ${formattedViews} views . ${monthsOld} months ago`;

    // Append title and details to item div
    itemDiv2.appendChild(titleH3);
    itemDiv2.appendChild(detailsP);

    // Append both item divs to container div
    containerDiv.appendChild(itemDiv1);
    containerDiv.appendChild(itemDiv2);

    // Append container div to body
    document.body.appendChild(containerDiv);

}



// function createCard(title, cName, views, monthsOld, duration, thumbnail) {
//     let formattedViews = formatViews(views);
//     let image = document.querySelector(".item img");
//     image.setAttribute("src", `${thumbnail}`);

//     let element1 = document.querySelector('.item');
//     let para = element1.querySelector('p');
//     para.insertAdjacentHTML("afterbegin", `${duration}`);

//     // Select the second item and insert the card details
//     let element2 = document.querySelector('.item:nth-child(2)');
//     element2.insertAdjacentHTML("afterbegin", `
//         <h3>${title}</h3>
//         <p>${cName} . ${formattedViews} views . ${monthsOld} months ago</p>
//     `);
// }

// Call the function to create a card
createCard(
    "Introduction to Backend | Sigma Web Dev video #2",
    "CodeWithHarry",
    560000,
    7,
    "31:22",
    "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q"
);

createCard(
    "Introduction to frontend | Sigma Web Dev video #2",
    "CodeWHarry",
    5000,
    7,
    "3:22",
    "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q"
);

createCard(
    "Introduction to frontend | Sigma Web Dev video #2",
    "CodeWHarry",
    5000,
    7,
    "3:22",
    "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q"
);

createCard(
    "Introduction to frontend | Sigma Web Dev video #2",
    "CodeWHarry",
    5000,
    7,
    "3:22",
    "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q"
);

createCard(
    "Introduction to frontend | Sigma Web Dev video #2",
    "CodeWHarry",
    5000,
    7,
    "3:22",
    "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q"
);

createCard(
    "Introduction to frontend | Sigma Web Dev video #2",
    "CodeWHarry",
    5000,
    7,
    "3:22",
    "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q"
);

createCard(
    "Introduction to frontend | Sigma Web Dev video #2",
    "CodeWHarry",
    5000,
    7,
    "3:22",
    "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q"
);

createCard(
    "Introduction to frontend | Sigma Web Dev video #2",
    "CodeWHarry",
    5000,
    7,
    "3:22",
    "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q"
);






