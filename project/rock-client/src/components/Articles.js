/** @jsxImportSource @emotion/react */

export default function Articles() {
    return (
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
