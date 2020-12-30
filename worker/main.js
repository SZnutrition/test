class Test {
    constructor() {
        this.sideWrapper = document.querySelector("#thematics-wrapper-test")
        this.contentWrapper = document.querySelector("#component-tab-left")
    }
    sideWrapperPopulate(t) {
        const liSide = document.createElement("li");
        const aSide = document.createElement("a");

        aSide.href = "#";
        aSide.innerText = t.testName;
        liSide.appendChild(aSide);
        this.sideWrapper.appendChild(liSide);
    }
    contentWrapperPopulate(t) {
        const liContent = document.createElement("li");
        const cardDefaultContent = document.createElement("div");
        const cardHeader = document.createElement("div");
        const cardHeaderText = document.createElement("h3");
        const cardGrid = document.createElement("div");
        const cardWidthAuto = document.createElement("div");
        const cardImg = document.createElement("img");
        const cardWidthExpand =  document.createElement("div");
        const cardBody = document.createElement("div");
        const cardBodyDesc = document.createElement("p");
        const cardFooter = document.createElement("div");
        const cardFooterBtn = document.createElement("a");
        const aContent = document.createElement("a");

        cardDefaultContent.className = "uk-card uk-card-default";
        cardHeader.className = "uk-card-header";
        cardBody.className = "uk-card-body";
        cardBodyDesc.innerText = t.testDescription;
        cardFooter.className ="uk-card-footer";
        cardFooterBtn.className = "uk-button uk-button-text uk-align-center";
        cardFooterBtn.href = t.testHref;
        cardFooterBtn.innerText = 'Перейти к тестированию';
        cardGrid.className = "uk-grid-small uk-flex-middle";
        cardWidthAuto.className = "uk-width-auto";
        cardWidthExpand.className = "uk-width-expand";
        cardGrid.setAttribute("uk-grid", 1);
        cardHeaderText.innerText = t.testName;
        cardHeaderText.className = "uk-card-title uk-margin-remove-bottom";
        cardImg.className = "uk-border-circle";
        cardImg.width = 40;
        cardImg.height = 40;
        cardImg.src = t.testImg;
        cardWidthExpand.appendChild(cardHeaderText);
        cardWidthAuto.appendChild(cardImg);
        cardGrid.appendChild(cardWidthAuto);
        cardGrid.appendChild(cardWidthExpand);
        cardHeader.appendChild(cardGrid);

        cardBody.appendChild(cardBodyDesc);
        cardFooter.appendChild(cardFooterBtn);
        cardDefaultContent.appendChild(cardHeader);
        cardDefaultContent.appendChild(cardBody);
        cardDefaultContent.appendChild(cardFooter);
        liContent.appendChild(cardDefaultContent);
        this.contentWrapper.appendChild(liContent);
    }
    init() {
        tests.forEach((t) => {
            this.sideWrapperPopulate(t);
            this.contentWrapperPopulate(t);
        });
    }
}
new Test().init();

class Analyze {
    constructor() {
        this.sideWrapper = document.querySelector("#thematics-wrapper-analyze")
        this.contentWrapper = document.querySelector("#component-tab-right")
    }
    sideWrapperPopulate(a) {
        const liSide = document.createElement("li");
        const aSide = document.createElement("a");

        aSide.href = "#";
        aSide.innerText = a.analyzeName;
        liSide.appendChild(aSide);
        this.sideWrapper.appendChild(liSide);
    }
    contentWrapperPopulate(a) {
        const liContent = document.createElement("li");
        const cardDefaultContent = document.createElement("div");
        const cardHeader = document.createElement("div");
        const cardHeaderText = document.createElement("h3");
        const cardGrid = document.createElement("div");
        const cardWidthAuto = document.createElement("div");
        const cardImg = document.createElement("img");
        const cardWidthExpand =  document.createElement("div");
        const cardBody = document.createElement("div");
        const cardBodyDesc = document.createElement("p");
        const cardFooter = document.createElement("div");
        const cardFooterBtn = document.createElement("a");
        const aContent = document.createElement("a");

        cardDefaultContent.className = "uk-card uk-card-default";
        cardHeader.className = "uk-card-header";
        cardBody.className = "uk-card-body";
        cardBodyDesc.innerText = a.analyzeDescription;
        cardFooter.className ="uk-card-footer";
        cardFooterBtn.className = "uk-button uk-button-text uk-align-center";
        cardFooterBtn.href = a.analyzeHref;
        cardFooterBtn.innerText = a.analyzeBtn;
        cardGrid.className = "uk-grid-small uk-flex-middle";
        cardWidthAuto.className = "uk-width-auto";
        cardWidthExpand.className = "uk-width-expand";
        cardGrid.setAttribute("uk-grid", 1);
        cardHeaderText.innerText = a.analyzeName;
        cardHeaderText.className = "uk-card-title uk-margin-remove-bottom";
        cardImg.className = "uk-border-circle";
        cardImg.width = 40;
        cardImg.height = 40;
        cardImg.src = a.analyzeImg;
        cardWidthExpand.appendChild(cardHeaderText);
        cardWidthAuto.appendChild(cardImg);
        cardGrid.appendChild(cardWidthAuto);
        cardGrid.appendChild(cardWidthExpand);
        cardHeader.appendChild(cardGrid);

        cardBody.appendChild(cardBodyDesc);
        cardFooter.appendChild(cardFooterBtn);
        cardDefaultContent.appendChild(cardHeader);
        cardDefaultContent.appendChild(cardBody);
        cardDefaultContent.appendChild(cardFooter);
        liContent.appendChild(cardDefaultContent);
        this.contentWrapper.appendChild(liContent);
    }
    init() {
        analyzes.forEach((a) => {
            this.sideWrapperPopulate(a);
            this.contentWrapperPopulate(a);
        });
    }
}
new Analyze().init();
