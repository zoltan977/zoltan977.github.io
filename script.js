async function _load() {
    const aboutMeArticle = document.querySelector('main > section:first-of-type > article:first-of-type');
    const techStackTitle = document.querySelector('main > section:first-of-type > article:nth-of-type(2) > h1:first-of-type');
    const englishTitle = document.querySelector('main > section:first-of-type > article:nth-of-type(3) > h1:first-of-type');
    const english = document.querySelector('main > section:first-of-type > article:nth-of-type(3) > p:first-of-type');
    const contactTitle = document.querySelector('main > aside > section > h3:first-of-type');
    const langSwitch = document.querySelector('[type=checkbox]');

    let textData = {};
    let textDataPathHun = './text.hu.json';
    let textDataPathEng = './text.en.json';

    langSwitchHandler();
    
    async function getTextData(path) {
        const response = await fetch(path);
        const json = await response.json();
        return json;
    }

    async function langSwitchHandler() {
        if (langSwitch.checked) {
            textData = await getTextData(textDataPathEng);
        } else {
            textData = await getTextData(textDataPathHun);
        }
        renderTextData();
    }

    function renderTextData() {
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

    langSwitch.addEventListener('change', langSwitchHandler);
}

window.addEventListener("load", _load);
