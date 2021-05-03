import React from "react";


function Nav(props) {
  const  tabs = ['Home', 'About', 'Projects', 'Contact' ];

  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
      <span role="img" aria-label="computer"> 👩🏻‍💻</span> Cori Cathemer
      </h2>
      <ul className="flex-row">
      {tabs.map(tab => (
        <li className={"mx-2"} key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            // Whenever a tab is clicked on,
            // the current page is set through the handlePageChange props.
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
    </header>
  );
}

export default Nav;