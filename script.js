async function _load() {
    async function getTextData(path) {
        const response = await fetch(path);
        const json = await response.json();
        return json;
    }
    function renderTextData(textData) {
        contactTitle.innerText = textData.contactTitle;
        techStackTitle.innerText = textData.techStackTitle;
        englishTitle.innerText = textData.englishTitle;
        english.innerText = textData.english;

        aboutMeArticle.innerHTML = "";
        const aboutMeTitle = document.createElement("h1");
        aboutMeTitle.innerText = textData.aboutMeTitle;
        aboutMeArticle.appendChild(aboutMeTitle);

        const aboutMeTexts = textData.aboutMe;
        for (const text of aboutMeTexts) {
            const p = document.createElement("p");
            p.innerHTML = text;
            aboutMeTitle.insertAdjacentElement("afterend", p);
        }
    }
    async function langSwitchHandler() {

        let textData = {};
        const textDataPathHun = './text.hu.json';
        const textDataPathEng = './text.en.json';

        if (langSwitch.checked) {
            textData = await getTextData(textDataPathEng);
        } else {
            textData = await getTextData(textDataPathHun);
        }
        renderTextData(textData);
    }

    const aboutMeArticle = document.querySelector('main > section:first-of-type > article:first-of-type');
    const techStackTitle = document.querySelector('main > section:first-of-type > article:nth-of-type(2) > h1');
    const englishTitle = document.querySelector('main > section:first-of-type > article:nth-of-type(3) > h1');
    const english = document.querySelector('main > section:first-of-type > article:nth-of-type(3) > p');
    const contactTitle = document.querySelector('main > aside > section > h3');
    const langSwitch = document.querySelector('[type=checkbox]');

    langSwitch.addEventListener('change', langSwitchHandler);
    langSwitchHandler();
}

window.addEventListener("load", _load);
