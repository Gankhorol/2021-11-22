/** @jsxImportSource @emotion/react */

import Categories from "./Categories";

export default function Articles() {
    return (
        <>
            <Categories />

            <div css={gridCss}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                    <div className="card" css={gridItemCss} key={item}>
                        <div className="card-image">
                            <figure className="image is-16by9">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="card-content">{index % 2 === 1 && <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}</div>
                    </div>
                ))}
            </div>

            <nav class="pagination" role="navigation" aria-label="pagination">
                <a class="pagination-previous is-disabled" title="This is the first page">
                    Previous
                </a>
                <a class="pagination-next">Next page</a>
                <ul class="pagination-list">
                    <li>
                        <a class="pagination-link is-current" aria-label="Page 1" aria-current="page">
                            1
                        </a>
                    </li>
                    <li>
                        <a class="pagination-link" aria-label="Goto page 2">
                            2
                        </a>
                    </li>
                    <li>
                        <a class="pagination-link" aria-label="Goto page 3">
                            3
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

const gridCss = {
    display: "flex",
    flexWrap: "wrap",
};

// desktop first
const gridItemCss = {
    width: "32%",
    marginBottom: "2%",
    marginRight: "2%",
    "&:nth-of-type(3n)": {
        marginRight: 0,
    },

    "@media(max-width: 550px)": {
        width: "48%",
        marginBottom: "4%",
        marginRight: "4%",
        "&:nth-of-type(3n)": {
            marginRight: "4%",
        },
        "&:nth-of-type(2n)": {
            marginRight: 0,
        },
    },

    "@media(max-width: 400px)": {
        width: "100%",
        marginBottom: "1rem",
        marginRight: 0,
    },
};
