document.addEventListener("DOMContentLoaded", () => {
    const tiles = document.querySelectorAll(".tile");
    const modal = document.getElementById("modal");
    const closeBtn = document.getElementById("close-btn");
    const surpriseContent = document.getElementById("surprise-content");
    const today = new Date().getDate(); // Aktuální den

    // Inspirace na jednotlivé dny s odpovídajícími obrázky
    const surprises = {
        1: `<p>Zkuste romantickou masáž se zaměřením na záda.</p>
            <img src="https://source.unsplash.com/400x300/?massage" alt="Masáž zad">`,
        2: `<p>Prozkoumejte nový polibek, zaměřte se na krk.</p>
            <img src="https://source.unsplash.com/400x300/?neck-kiss" alt="Polibek na krk">`,
        3: `<p>Vyzkoušejte jemnou hru: vzájemné laskání chodidel.</p>
            <img src="https://source.unsplash.com/400x300/?feet" alt="Masáž chodidel">`,
        4: `<p>Inspirace: Pozice „Lžička“ – ideální pro intimní propojení.</p>
            <img src="https://source.unsplash.com/400x300/?cuddling" alt="Pozice lžička">`,
        5: `<p>Překvapení: Večer při svíčkách, doplněný společným čtením.</p>
            <img src="https://source.unsplash.com/400x300/?candlelight" alt="Večer při svíčkách">`,
        6: `<p>Pro tento den vyzkoušejte anální sex – otevřeně o tom komunikujte.</p>
            <img src="https://source.unsplash.com/400x300/?romantic" alt="Symbolický obrázek">`,
        7: `<p>Zaměřte se na dlouhé oční kontakty a vnímání blízkosti.</p>
            <img src="https://source.unsplash.com/400x300/?eye-contact" alt="Oční kontakt">`,
        8: `<p>Společně experimentujte se smysly – zkuste zavázat oči a použít doteky.</p>
            <img src="https://source.unsplash.com/400x300/?blindfold" alt="Zavázané oči">`,
        9: `<p>Překvapení: Pozice „Most“ – náročnější, ale hluboký zážitek.</p>
            <img src="https://source.unsplash.com/400x300/?bridge" alt="Pozice most">`,
        10: `<p>Experimentujte s líbáním – zaměřte se na jiné části těla.</p>
             <img src="https://source.unsplash.com/400x300/?kiss" alt="Experimentování s polibky">`
    };

    tiles.forEach(tile => {
        const day = parseInt(tile.dataset.day, 10);
        if (day > today) {
            tile.classList.add("locked");
        } else {
            tile.addEventListener("click", () => {
                showSurprise(day);
            });
        }
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    function showSurprise(day) {
        surpriseContent.innerHTML = surprises[day] || "<p>Překvapení pro tento den není dostupné.</p>";
        modal.classList.remove("hidden");
    }
});