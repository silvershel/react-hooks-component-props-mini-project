import React from "react";

function About(props) {
    const { image, about } = props
    
    return (
        <aside>
            <img src={image || "https://via.placeholder.com/215"} alt="blog logo" />
            <p>{about}</p>
        </aside>
    )
}

export default About;

/*
Child of App

Should return:
    an <aside> element with the following elements inside:
    an <img> element, with the src set to an image passed as a prop called image
    the <img> element should use this placeholder image as a default value for the prop if no prop is passed in: "https://via.placeholder.com/215Links to an external site."
    the image should also be accessible! Give it an alt attribute of "blog logo"
    a <p> element, with the text for the blog passed in as a prop called about
*/