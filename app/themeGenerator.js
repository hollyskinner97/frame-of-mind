import { generateSlug } from "random-word-slugs";

const options = {
    format: "title",
    partsOfSpeech: ["adjective", "noun"],
    // categories: {
    //     adjective: ["condition"]
    // }
}

const slug = generateSlug(2, options);
console.log(slug);