const success = true;

const undaandguih = new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            console.log("undaand guij bn");
            if (success) {
                //sdfsdfsdf
                resolve("Amjilttai avaad irlee");
            } else {
                reject("Undaa baisangui");
            }
        }, 5 * 1000);
    } catch (e) {
        reject(e);
    }
});

undaandguih
    .then((data) => {
        console.log("Success:", data);
    })
    .catch((err) => console.log("Error:", err));

console.log("togsov");

async function undaandGui() {
    console.log("Uildel 1");
    const result = await undaandguih;
    console.log("Uildel 2");
    console.log(result);
}

undaandGui();
