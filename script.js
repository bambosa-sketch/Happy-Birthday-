/* =========================================================
   MUKUNTHANA'S BIRTHDAY
   The little bit of magic behind the page 💗
   ========================================================= */


/* ---------------------------------------------------------
   WAIT FOR THE PAGE TO LOAD
   --------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {

    const surpriseButton = document.getElementById("surpriseButton");
    const surpriseSection = document.getElementById("surprise");

    let surpriseOpened = false;


    /* -----------------------------------------------------
       OPEN THE BIRTHDAY SURPRISE
       ----------------------------------------------------- */

    surpriseButton.addEventListener("click", () => {

        if (surpriseOpened) {
            return;
        }

        surpriseOpened = true;

        /* Change the button */

        surpriseButton.textContent = "💗 Happy Birthday, Mukunthana! 💗";


        /* Create the secret message */

        const message = document.createElement("div");

        message.className = "secret-message";

        message.innerHTML = `
            <div class="secret-content">

                <div class="secret-heart">💗</div>

                <h2>One More Thing...</h2>

                <p>
                    Today is your day, Mukunthana.
                </p>

                <p>
                    I hope when you look back at this birthday,
                    you remember how loved, appreciated,
                    and special you are.
                </p>

                <p>
                    Keep smiling.
                    Keep dreaming.
                    Keep being wonderfully yourself.
                </p>

                <p>
                    And most importantly...
                    never forget that you deserve
                    beautiful things and beautiful moments. 🌷
                </p>

                <h3>
                    Have the most wonderful birthday ever! 🎂✨
                </h3>

                <div class="secret-signature">
                    With lots of good wishes 💕
                </div>

            </div>
        `;

        surpriseSection.appendChild(message);


        /* Smoothly reveal the message */

        setTimeout(() => {
            message.classList.add("show");
        }, 50);


        /* Create the celebration */

        createHeartCelebration();

    });


    /* -----------------------------------------------------
       HEART CELEBRATION
       ----------------------------------------------------- */

    function createHeartCelebration() {

        const hearts = [
            "💗",
            "💖",
            "💕",
            "💓",
            "💞",
            "💘",
            "🌸",
            "✨",
            "🎀"
        ];

        const numberOfHearts = 45;

        for (let i = 0; i < numberOfHearts; i++) {

            setTimeout(() => {

                const heart = document.createElement("div");

                heart.className = "celebration-heart";

                heart.textContent =
                    hearts[Math.floor(Math.random() * hearts.length)];

                heart.style.left =
                    Math.random() * 100 + "vw";

                heart.style.fontSize =
                    (Math.random() * 1.5 + 0.8) + "rem";

                heart.style.animationDuration =
                    (Math.random() * 3 + 3) + "s";

                heart.style.animationDelay =
                    (Math.random() * 0.5) + "s";

                document.body.appendChild(heart);


                /* Remove after animation */

                setTimeout(() => {
                    heart.remove();
                }, 7000);

            }, i * 70);
        }
    }


    /* -----------------------------------------------------
       SMALL HEARTS WHEN CLICKING THE PAGE
       ----------------------------------------------------- */

    document.addEventListener("click", (event) => {

        /*
            Don't create extra hearts when clicking
            the main surprise button.
        */

        if (event.target === surpriseButton) {
            return;
        }


        const heart = document.createElement("span");

        heart.className = "click-heart";

        heart.textContent = "♡";

        heart.style.left = event.clientX + "px";

        heart.style.top = event.clientY + "px";

        document.body.appendChild(heart);


        setTimeout(() => {
            heart.remove();
        }, 1200);

    });


    /* -----------------------------------------------------
       ADD A LITTLE CONSOLE EASTER EGG
       ----------------------------------------------------- */

    console.log(
        "%c💗 Happy Birthday, Mukunthana! 💗",
        "font-size: 20px; color: #d94f88; font-weight: bold;"
    );

    console.log(
        "%cSomeone put a little love into making this website. 🌸",
        "font-size: 14px; color: #a83f6c;"
    );

});