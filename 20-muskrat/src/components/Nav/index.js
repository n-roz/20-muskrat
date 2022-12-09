import React from "react";

function Nav() {
    const categories = [
        {
          name: "About",
          description:
            "Me",
        },
        { name: "Portfolio", description: "Portraits of people in my life" },
        { name: "food", description: "Delicious delicacies" },
        {
          name: "Contact",
          description: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
      ];
    return(
        <div className="navbar">
            <ol>
                <li className="tab">
                    <a href="/#About Me">
                        //before state
                    </a>
                </li>
                <li className="tab">
                    <a href="/#Portfolio">
                        //before state
                    </a>
                </li>
                <li className="tab">
                    <a href="/#Contact">
                        //before state
                    </a>
                </li>
                <li className="tab">
                    <a href="/#Resume">
                        Resume
                    </a>
                </li>
            </ol>
        </div>
    )
}

export default Nav;