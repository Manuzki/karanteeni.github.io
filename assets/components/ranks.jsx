'use strict';

class Ranks extends React.Component {
    render() {
        return (
            <div>
            <div className="collapse text-left mbot" id="reloton">
                <div className="card card-body">
                  Eloton on aloitusrankki, jonka saat heti palvelimelle liittyessäsi. Elottomalla on seuraavat oikeudet: <br/><br/>
                  <ul>
                      <li>/avaa</li>
                      <li>/avaakaikille</li>
                      <li>/back</li>
                      <li>/checkban</li>
                      <li>/crea</li>
                      <li>/kit Aloitus</li>
                      <li>/sethome (1 kappale)</li>
                      <li>/lay</li>
                      <li>/list</li>
                      <li>/lunastavote</li>
                      <li>/msg</li>
                      <li>/near</li>
                      <li>/+oikeudet nimi (lisää oikeudet pelaajalle palikkaan, /-oikeudet taasen poistaa oikeudet)</li>
                      <li>/peliaika (/pa, /ar)</li>
                      <li>/pennipeli (myös /lotto)</li>
                      <li>/recipe</li>
                      <li>/reply</li>
                      <li>/report</li>
                      <li>/rtp</li>
                      <li>/seen</li>
                      <li>/sit</li>
                      <li>/spawn</li>
                      <li>/tpa</li>
                      <li>/tpahere</li>
                      <li>/tpignore</li>
                      <li>/valikko</li>
                      <li>/vote</li>
                      <li>/warp(s)</li>
                      <li>/whois</li>
                  </ul>
                </div>
                </div>
            <div className="collapse text-left mbot" id="rraihnas">
                <div className="card card-body">
                  <p>Raihnas on toinen rankki, jonka saat pelattuasi palvelimella yhteensä viisi tuntia (5h). Raihnaalla, tietystikin on Elottoman oikeudet, sekä seuraavat oikeudet: </p><br/><br/>
                  <ul>
                      <li>/kit Raihnas</li>
                      <li>/hat</li>
                      <li>/sethome (2 kappaletta)</li>
                      <li>/compass</li>
                      <li>/workbench</li>
                  </ul><br/>
                  </div>
            </div>
               <div className="collapse text-left mbot" id="rsisukas">
                <div className="card card-body">
                  <p>Sisukas on kolmas rankki, jonka saat pelattuasi palvelimella yhteensä yhden päivän (1d). Kuten aikaisemmin, Sisukkaalla on Raihnaan oikeudet, sekä seuraavat oikeudet: </p><br/><br/>
                  <ul>
                      <li>/kit Sisukas (korvaa /kit Raihnas)</li>
                      <li>/sethome (6 kappaletta)</li>
                      <li>/enderchest</li>
                      <li><b><span data-toggle="tooltip" data-placement="right" title="Taikamatto, 5x5 kokoinen lasimatto allasi, jolla voit leijua ilmassa, sekä lentää.">/mc*</span></b></li>
                      <li>/mc light</li>
                      <li>/near</li>
                      <li><b><span data-toggle="tooltip" data-placement="right" title="Voit äänestää äänestyksissä puolesta ja vastaan.">/vk n / vk y*</span></b></li>
                      <li><b><span data-toggle="tooltip" data-placement="right" title="Vaalean harmaa (oletus) ja läpinäkyvä">Kaksi uutta väriä taikamattoon (mc)*</span></b></li>
                  </ul><br/>
                </div>
                </div>
               <div className="collapse text-left mbot" id="rparantuva">
                <div className="card card-body">
                <p>Parantuva on neljäs rankki, jonka saat pelattuasi palvelimella yhteensä viisi päivää (5d). Parantuvalla on seuraavat lisäoikeudet:</p> <br/><br/>
                  <ul>
                      <li>/kit Parantuva (korvaa /kit Sisukas)</li>
                      <li>/sethome (8 kappaletta)</li>
                      <li>/jump</li>
                      <li>/mc tools</li>
                      <li><b><span data-toggle="tooltip" data-placement="right" title="Nimen täytyy olla samankaltainen Minecraft nimesi kanssa tunnistautumisen vuoksi.">/nick*</span></b></li>
                      <li><b><span data-toggle="tooltip" data-placement="right" title="Voit teleporttaa X, Y ja Z koordinaatteihin.">/tp x y z*</span></b></li>
                      <li><b><span data-toggle="tooltip" data-placement="right" title="Voit aloittaa äänestyksen pelaajan hiljentämistä (20min) tai pelaajan potkimista varten.">/rankaise votemute /rankaise votekick*</span></b></li>
                      <li>Voit hakata Spawnereita ilman Silk Touch -hakkua <b>(huom. Tarvitset silti hakun!)</b>, sekä kirjoittaa kyltteihin väreillä.</li>
                      <li><b><span data-toggle="tooltip" data-placement="right" title="Valkoinen, harmaa ja sininen">Kolme uutta väriä taikamattoon (mc)*</span></b></li>
                  </ul><br/>
                  </div>
                  </div>
               <div className="collapse text-left mbot" id="rimmuuni">
                <div className="card card-body">
                  <p>Immuuni on viides rankki, jonka saat pelattuasi palvelimella yhteensä kymmenen päivää (10d). Immuunilla on seuraavat lisäoikeudet:</p> <br/><br/>
                  <ul>
                      <li>/kit Immuuni (korvaa /kit Parantuva)</li>
                      <li>/day</li>
                      <li>/sethome (12 kappaletta)</li>
                      <li>/fly</li>
                      <li><b><span data-toggle="tooltip" data-placement="right" title="Nimeää kädessäsi olevan tavaran. (Voi käyttää värejä)">/nimeä*</span></b></li>
                      <li><b><span data-toggle="tooltip" data-placement="right" title="Vaihtaa olemassa olevan spawnerin. Pro tip: Aseta spawner maahan ja katso sitä kohti ennen komennon suorittamista.">/spawner*</span></b></li>
                      <li>/tp</li>
                      <li>/tptoggle</li>
                      <li><b><span data-toggle="tooltip" data-placement="right" title="Keltainen ja ruskea">Kaksi uutta väriä taikamattoon (mc)*</span></b></li>
                  </ul><br/>
                  </div>
                  </div>
               <div className="collapse text-left mbot" id="rparantaja" >
                <div className="card card-body" >
                  <p>Parantajan saat pelattuasi palvelimella yhteensä 30 päivää (30d). Parantajilla on seuraavat lisäoikeudet:</p> <br/><br/>
                  <ul>
                      <li>/kit Parantaja (korvaa /kit Immuuni)</li>
                      <li>/sethome (16 kappaletta)</li>
                      <li>/jail</li>
                      <li>/kick</li>
                      <li>/mute</li>
                      <li><b><span data-toggle="tooltip" data-placement="right" title="Lime ja musta">Kaksi uutta väriä taikamattoon (mc)*</span></b></li>
                  </ul><br/>
                  </div></div>
               <div className="collapse text-left mbot" id="rnekromantikko">
                <div className="card card-body">
                  <p>Nekromantikkoon vaaditaan 60 päivän (60d) peliaika. Nekromantikolla on seuraavat lisäoikeudet:</p> <br/><br/>
                  <ul>
                    <li><span data-toggle="tooltip" data-placement="right" title="Laittaa blokkien tarkastelun päälle, jolla näkee kaikki sen blokin tiedot."><b>/co i*</b></span></li>
                    <li>/kit Nekromantikko (korvaa /kit Parantaja)</li>
                    <li>/sethome (18 kappaletta)</li>
                    <li><b><span data-toggle="tooltip" data-placement="right" title="Magenta ja punainen">Kaksi uutta väriä taikamattoon (mc)*</span></b></li>
                  </ul><br/>
                  </div></div>
               <div className="collapse text-left mbot" id="rkuolematon">
                <div className="card card-body">
                  <p>Jotta sinulle voidaan myöntää viimeinen pelaaja-arvo ja täten tunnustaa Kuolemattomaksi, peliaikasi täytyy olla 100 päivää (100d). Kuolemattomilla on seuraavat lisäoikeudet: </p><br/><br/>
                  <ul>
                    <li>/kit Kuolematon (korvaa /kit Nekromantikko)</li>
                    <li><b><span data-toggle="tooltip" data-placement="right" title="Pinkki, syaani, purppura, oranssi, vihreä ja vaalean sininen">Kuusi uutta väriä taikamattoon (mc)*</span></b></li>
                  </ul>
                </div>
            </div>
            </div>
        );
    }
}

ReactDOM.render(<Ranks/>, document.getElementById('rankit'));