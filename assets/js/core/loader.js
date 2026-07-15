/* ==========================================================
   LOADER.JS
   Projeto: Portfólio Laerte Alves
========================================================== */

class Loader {

    constructor() {

        this.loader = document.querySelector(".loader");

        this.lines = [
            "Initializing System...",
            "Loading Interface...",
            "Loading Assets...",
            "Loading Portfolio...",
            "Connecting..."
        ];

        this.progress = 0;

        this.currentLine = 0;

        this.fill = document.querySelector(".loader__fill");

        this.percentage = document.querySelector(".loader__percentage");

        this.terminal = document.querySelector(".loader__terminal");

        this.status = document.querySelector(".loader__status");

    }

    init() {

        document.body.classList.add("is-loading");

        this.writeLines();

    }

    writeLines() {

        const interval = setInterval(() => {

            if (this.currentLine >= this.lines.length) {

                clearInterval(interval);

                this.startProgress();

                return;

            }

            const line = document.createElement("div");

            line.className = "loader__line active";

            line.innerHTML = `
                <span class="loader__symbol">></span>
                <span>${this.lines[this.currentLine]}</span>
            `;

            this.terminal.appendChild(line);

            this.currentLine++;

        }, 450);

    }

    startProgress() {

        const interval = setInterval(() => {

            this.progress += Math.floor(Math.random() * 6) + 3;

            if (this.progress >= 100) {

                this.progress = 100;

            }

            this.fill.style.width = this.progress + "%";

            this.percentage.textContent = `${this.progress}%`;

            if (this.progress === 100) {

                clearInterval(interval);

                this.finish();

            }

        }, 90);

    }

    finish() {

        this.status.textContent = "SYSTEM READY";

        this.loader.classList.add("glitch");

        setTimeout(() => {

            this.loader.classList.add("hidden");

            document.body.classList.remove("is-loading");

            document.dispatchEvent(
                new CustomEvent("loaderFinished")
            );

        }, 800);

    }

}

function initLoader() {

    const loader = new Loader();

    loader.init();

}