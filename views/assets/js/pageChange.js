const nextPage = document.getElementById("nextPage")
const previousPage = document.getElementById("previousPage")

const content = document.querySelector(".content");


Array.prototype.next = function () {
    if (!((this.current + 1) in this)) return false;
    return this[++this.current];
};
Array.prototype.prev = function () {
    if (!((this.current - 1) in this)) return false;
    return this[--this.current];
};
Array.prototype.current = 0;

const page1 = `<h2>What are my rights as a citizen?</h2>
<p>
    <h3>Right to Equality (Articles 14 – 18)</h3>
    The right to equality is one of the important fundamental rights of the Indian Constitution that guarantees equal rights for everyone, irrespective of religion, gender, caste, race or place of birth. It ensures equal employment opportunities in the government and insures against discrimination by the State in matters of employment on the basis of caste, religion, etc. This right also includes the abolition of titles as well as untouchability.
</p>

<p>
    <h3>Right to Freedom (Articles 19 – 22)</h3>
    Freedom is one of the most important ideals cherished by any democratic society. The Indian Constitution guarantees freedom to citizens. The freedom right includes many rights such as:
    <br>
    <ul>
        <li>Freedom of speech</li>
        <li>Freedom of expression</li>
        <li>Freedom of assembly without arms</li>
        <li>Freedom of association</li>
        <li>Freedom to practise any profession</li>
        <li>Freedom to reside in any part of the country</li>
    </ul>
</p>`;

const page2 = `<p>
<h3>Right against Exploitation (Articles 23 – 24)</h3>
This right implies the prohibition of traffic in human beings, begar, and other forms of forced labour. It also implies the prohibition of employment of children in factories, etc. The Constitution prohibits the employment of children under 14 years in hazardous conditions.
</p>
<p>
<h3>Right to Freedom of Religion (Articles 25 – 28)</h3>
This indicates the secular nature of Indian polity. There is equal respect given to all religions. There is freedom of conscience, profession, practice and propagation of religion. The State has no official religion. Every person has the right to freely practice his or her faith, and establish and maintain religious and charitable institutions.
</p>`;

const page3 = `<p>
<h3>Cultural and Educational Rights (Articles 29 – 30)</h3>
These rights protect the rights of religious, cultural and linguistic minorities, by facilitating them to preserve their heritage and culture. Educational rights are for ensuring education for everyone without any discrimination.
</p>
<p>
<h3>Right to Constitutional Remedies (32 – 35)</h3>
The Constitution guarantees remedies if citizens’ fundamental rights are violated. The government cannot infringe upon or curb anyone’s rights. When these rights are violated, the aggrieved party can approach the courts. Citizens can even go directly to the Supreme Court which can issue writs for enforcing fundamental rights.
</p>`;

const pages = [page1, page2, page3];

let pageCount = 0;

nextPage.addEventListener("click", () => {

    let html = pages.next();

    if (html) {
        pageCount++;
        pageCount >= 0 && pageCount < 2 ? [nextPage, previousPage].forEach((e) => e.classList.remove("invisible")): nextPage.classList.add("invisible")

        content.innerHTML = html;
    }
})

previousPage.addEventListener("click", () => {
    let html = pages.prev();

    if (html) {
        pageCount--;
        pageCount > 0 && pageCount <= 2 ? [nextPage, previousPage].forEach((e) => e.classList.remove("invisible")) :
            previousPage.classList.add("invisible")

        content.innerHTML = html;
    }
})